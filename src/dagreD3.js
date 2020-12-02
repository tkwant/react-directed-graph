import React, { Component } from 'react'
import * as dagreD3 from 'dagre-d3'
import * as d3 from 'd3'
import reactToCSS from 'react-style-object-to-css'
import { renderToStaticMarkup } from 'react-dom/server'
import './dagreD3.scss'
import _ from 'lodash'

const DEFAULT_PARAMS = {
  nodesep: 100,
  edgesep: 80,
  rankdir: 'TB',
  ranker: 'network-simplex',
}

class DagreD3React extends Component {
  constructor(props) {
    super(props)

    this.zoomed = this.zoomed.bind(this)
    this.keyDown = this.keyDown.bind(this)
    this.keyUp = this.keyUp.bind(this)
    this.svgRef = React.createRef()
    this.groupRef = React.createRef()
  }

  keyDown(event) {
    if (event.keyCode === 17) {
      this.enableZoomAndPanGraph()
    }
  }

  keyUp(event) {
    if (event.keyCode === 17) {
      this.enablePanGraph()
    }
  }

  enablePanGraph() {
    this.svg
      .call(this.zoom)
      .call(
        this.zoom.transform,
        d3.zoomIdentity.translate(this.x, this.y).scale(this.k)
      )
    this.svg.on('wheel.zoom', null)
    this.svg.on('dblclick.zoom', null)
  }

  enableZoomAndPanGraph() {
    this.svg
      .call(this.zoom)
      .call(
        this.zoom.transform,
        d3.zoomIdentity.translate(this.x, this.y).scale(this.k)
      )
  }

  componentWillReceiveProps(props) {
    this.props = props
    const oldNodesIds = Object.keys(this.g._nodes).map((el) => parseInt(el))
    const newNodesIds = this.props.children.map((el) => el.props.id)
    const nodesToRemove = _.difference(oldNodesIds, newNodesIds)
    nodesToRemove.forEach((el) => this.g.removeNode(el))

    this.addNodes()
    this.addLines()
    this.updateGraph()
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyDown, false)
    document.addEventListener('keyup', this.keyUp, false)
    this.newGraph()
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDown, false)
    document.addEventListener('keyup', this.keyUp, false)
  }

  zoomed() {
    this.x = d3.event.transform.x
    this.y = d3.event.transform.y
    this.k = d3.event.transform.k
    this.svgGroup.attr(
      'transform',
      'translate(' +
        d3.event.transform.x +
        ',' +
        d3.event.transform.y +
        ') scale(' +
        d3.event.transform.k +
        ')'
    )
  }

  addNodes() {
    this.props.children.forEach((node) => {
      this.g.setNode(node.props.id, {
        label: renderToStaticMarkup(node),
        labelType: 'html',
        style: reactToCSS(node.props.style),
        padding: 0,
      })
    })
  }

  addLines() {
    this.props.children.forEach((node) => {
      node.props.connection.forEach((line) => {
        this.g.setEdge(node.props.id, line.id, {
          labelType: 'html',
          label: line.label,
          style: reactToCSS(line.lineStyle),
          curve: d3.curveBasis,
          // style: "stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5;",
          arrowheadStyle: reactToCSS(line.arrowheadStyle),
        })
      })
    })
  }

  addNodeClickListener() {
    if (this.props.nodesOnClick) {
      this.svg.selectAll('.node').on('click', (e) => {
        this.props.nodesOnClick(Number(e))
      })
    }
  }

  newGraph() {
    this.zoom = d3
      .zoom()
      // .scaleExtent([1 / 2, 4])
      .on('zoom', this.zoomed)
    this.g = new dagreD3.graphlib.Graph().setGraph(DEFAULT_PARAMS)
    this.addNodes()
    this.addLines()
    this.svg = d3.select(this.svgRef.current)
    this.svgGroup = d3.select(this.groupRef.current)
    this.graphRender = new dagreD3.render()
    this.renderGraph()

    if (this.props.centerGraph) {
      this.centerGraph()
    }
    this.setSvgHeight()
    this.enablePanGraph()
    this.addNodeClickListener()
  }

  renderGraph() {
    this.graphRender(this.svgGroup, this.g)
  }

  updateGraph() {
    // scale to 1 and then back to the previous scale *bugfix
    this.svgGroup.attr(
      'transform',
      'translate(' + this.x + ', ' + this.y + ') scale(' + 1 + ')'
    )
    this.graphRender(this.svgGroup, this.g)
    this.svgGroup.attr(
      'transform',
      'translate(' + this.x + ', ' + this.y + ') scale(' + this.k + ')'
    )
    this.setSvgHeight()
    this.addNodeClickListener()
  }

  centerGraph() {
    this.svgNode = this.svg.node()
    this.x =
      (this.svgNode.getBoundingClientRect().width - this.g.graph().width) / 2
    this.y = 50
    this.k = 1
    this.svgGroup.attr(
      'transform',
      'translate(' + this.x + ', ' + this.y + ') '
    )
  }

  setSvgHeight() {
    this.graphHeight = this.g.graph().height
    this.svgNode.setAttribute(
      'height',
      this.props.height ? this.props.height : this.graphHeight + 2 * 50
    )
  }

  renderTitleBox() {
    if (this.props.titleBox) {
      return (
        <foreignObject x="46" y="22" width="200" height="200">
          {this.props.titleBox}
        </foreignObject>
      )
    }
  }

  render() {
    return (
      <div>
        <svg className="svgtest" style={this.props.svgStyle} ref={this.svgRef}>
          {this.renderTitleBox()}

          <g ref={this.groupRef}></g>
        </svg>
      </div>
    )
  }
}

export default DagreD3React

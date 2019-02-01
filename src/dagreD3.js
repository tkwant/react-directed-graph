import React, { Component } from 'react'
import * as dagreD3 from 'dagre-d3'
import * as d3 from 'd3'
import reactToCSS from 'react-style-object-to-css'
import { renderToStaticMarkup } from 'react-dom/server'
import './dagreD3.scss'
import './components/node.scss'
import 'bootstrap/dist/css/bootstrap.min.css';




class DagreD3React extends Component {
    constructor(props) {
        super(props)

        this.zoomed = this.zoomed.bind(this)
        this.keyDown = this.keyDown.bind(this);
        this.keyUp = this.keyUp.bind(this);
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
        this.svg.call(this.zoom).call(this.zoom.transform, d3.zoomIdentity.translate(this.x, this.y).scale(this.k))
        this.svg.on("wheel.zoom", null);
        this.svg.on("dblclick.zoom", null)
    }

    enableZoomAndPanGraph() {
        this.svg.call(this.zoom).call(this.zoom.transform, d3.zoomIdentity.translate(this.x, this.y).scale(this.k))
    }

    componentWillReceiveProps(props) {
        props.children.forEach((node) => {
            this.g.setNode(node.props.id, {
                label: renderToStaticMarkup(node),
                labelType: "html",
                style: reactToCSS(node.props.style),
                padding: 0
            })
        })
        props.edges.forEach((edge) => {
            this.g.setEdge(edge.from, edge.to, {
                labelType: "html",
                label: edge.label,
                style: reactToCSS(edge.style),
                // style: "stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5;",
                arrowheadStyle: reactToCSS(edge.arrowheadStyle)
            })
        })
        this.updateGraph()
    }

    componentDidMount() {
        document.addEventListener("keydown", this.keyDown, false);
        document.addEventListener("keyup", this.keyUp, false);
        this.newGraph()
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyDown, false);
        document.addEventListener("keyup", this.keyUp, false);
    }

    zoomed() {
        this.x = d3.event.transform.x
        this.y = d3.event.transform.y
        this.k = d3.event.transform.k
        this.svgGroup.attr('transform', 'translate(' + d3.event.transform.x + ',' + d3.event.transform.y + ') scale(' + d3.event.transform.k + ')');
    }

    newGraph() {
        this.zoom = d3.zoom()
            // .scaleExtent([1 / 2, 4])
            .on("zoom", this.zoomed);
        this.g = new dagreD3.graphlib.Graph().setGraph({});
        this.props.children.forEach((node) => {
            this.g.setNode(node.props.id, {
                label: renderToStaticMarkup(node),
                labelType: "html",
                style: reactToCSS(node.props.style),
                padding: 0
            })
        })
        this.props.children.forEach((node) =>{
            node.props.connection.forEach((line)=>{
                console.log('---------line---------------------------');
                console.log(line);
                console.log('------------------------------------');
                this.g.setEdge(node.props.id, line.id, {
                    labelType: 'html',
                    label: line.label,
                    style: reactToCSS(line.lineStyle),
                    // style: "stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5;",
                    arrowheadStyle: reactToCSS(line.arrowheadStyle)
                })
            })
        })
        this.svg = d3.select(this.refs.svg)
        this.svgGroup = d3.select(this.refs.group);
        this.graphRender = new dagreD3.render();
        this.renderGraph()
        if (this.props.nodesOnClick) {
            this.svg.selectAll(".node").on('click', () => {

            })
        }
        if (this.props.centerGraph) {
            this.centerGraph()
        }
        this.setSvgHeight()
        this.enablePanGraph()
    }

    renderGraph() {
        this.graphRender(this.svgGroup, this.g)
    }

    updateGraph() {
        this.svgGroup.attr("transform", "translate(" + this.x + ", " + this.y + ") scale(" + 1 + ")");
        this.graphRender(this.svgGroup, this.g)
        this.svgGroup.attr("transform", "translate(" + this.x + ", " + this.y + ") scale(" + this.k + ")");
        this.setSvgHeight()
    }

    centerGraph() {
        this.svgNode = this.svg.node();
        this.x = (this.svgNode.getBoundingClientRect().width - this.g.graph().width) / 2;
        this.y = 100
        this.k = 1
        this.svgGroup.attr("transform", "translate(" + this.x + ", " + this.y + ") ");
    }

    setSvgHeight() {
        this.graphHeight = this.g.graph().height
        this.svgNode.setAttribute("height", this.props.height ? this.props.height : this.graphHeight + this.y * 2);
    }

    render() {
        return (
            <div>
                <svg
                    className="svgtest"
                    style={this.props.svgStyle}
                    ref='svg'
                >
                    <g ref='group'></g>
                </svg>
            </div>
        )
    }
}

export default DagreD3React
import React, { Component } from 'react'
import * as dagreD3 from 'dagre-d3'
import * as d3 from 'd3'
import reactToCSS from 'react-style-object-to-css'
import { renderToStaticMarkup } from 'react-dom/server'
import reactElementToJSXString from 'react-element-to-jsx-string';
import { type } from 'os';

class DagreD3React extends Component {
    constructor(props) {
        super(props)
        this.zoomed = this.zoomed.bind(this)
        this.keyDown = this.keyDown.bind(this);
        this.keyUp = this.keyUp.bind(this);


    }

    keyDown(event){
        console.log(event);
        
        if(event.keyCode === 17) {
            this.svg.call(this.zoom)    
            }
        
      }
    keyUp(event){
        if(event.keyCode === 17) {
            this.svg.call(this.zoom)
            this.svg.on("wheel.zoom", null);
        }
    }

    componentWillReceiveProps(){
        this.newGraph()
    }

    componentDidMount() {
        document.addEventListener("keydown", this.keyDown, false);
        document.addEventListener("keyup", this.keyUp, false);

        this.newGraph()
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.keyDown, false);
        document.addEventListener("keyup", this.keyUp, false);

      }

     zoomed() {         
            console.log(this.svgGroup);
        this.svgGroup.attr("transform", d3.event.transform);

        
      }

    newGraph(){
        this.zoom = d3.zoom()
        .scaleExtent([1 / 2, 4])
        .on("zoom", this.zoomed);


        this.g = new dagreD3.graphlib.Graph().setGraph({});
        this.props.nodes.forEach((node)=>{
            this.g.setNode(node.id,{
                label: renderToStaticMarkup(node.html),
                labelType: "html",
                style: reactToCSS(node.style),
                padding: 0
            })
        })
        this.props.edges.forEach((edge)=>{
            this.g.setEdge(edge.from, edge.to, {
                labelType: "html",
                label: edge.label,
                style: reactToCSS(edge.style),
                // style: "stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5;",
                arrowheadStyle: reactToCSS(edge.arrowheadStyle)
            })
        })
        this.svg = d3.select(this.refs.svg)
        this.svgGroup = d3.select(this.refs.group);
        this.graphRender = new dagreD3.render();
        this.graphRender(this.svgGroup, this.g)

        if(this.props.centerGraph){
            this.centerGraph()
        }
        this.graphRender(this.svgGroup, this.g)

        if(this.props.nodesOnClick){
            this.svg.selectAll(".node").on('click',()=>{
                console.log("SSSSSSSSSSSSSSSS");
                
            })
        }
       // this.svg.call(this.zoom).filter(function() { return !event.button && event.type !== 'wheel'; })



    }

    centerGraph(){
        var svg = this.svg.node();
        var xCenterOffset = (svg.getBoundingClientRect().width - this.g.graph().width) / 2;
        this.svgGroup.attr("transform", "translate(" + xCenterOffset + ", 20)");
        this.svg.attr("height", this.g.graph().height + 40);
    }

    updateGraph() {

    }

    render() {
        return (
            <div>
                <svg
                    style={this.props.svgStyle}
                    ref= 'svg'

                >
                    <g ref='group'/>

                </svg>

            </div>
        )
    }
}

export default DagreD3React
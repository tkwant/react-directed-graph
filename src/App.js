import React, { Component } from 'react'
import DagreD3 from './dagreD3'
import Node1 from './components/node1'
class App extends Component {
    constructor() {
        super()
        const nodeOuterStyle = {
            fill: "white", 
            strokeWidth:3,
            stroke: "rgb(0,0,0)",
            padding:0
        }
        this.svgStyle = {
            width: "800px",
            height: "400px",
            border: "2px solid"

        }
        this.state = {
            nodes: [
                {
                    id: 0,
                    html: <Node1 
                        name= {"bigBen 1"}
                    />,
                    style: nodeOuterStyle

                },
                {
                    id: 1,
                    html: <Node1 
                    name= {"bigBen 2"}
            
                    />,
                    style: nodeOuterStyle
                },
                {
                    id: 2,
                    html: <Node1 
                    name= {"bigBen 3"}
                    />,
                    style: nodeOuterStyle
                },
            ],
            edges: [
                {
                    from: 0,
                    to: 1,
                    label: "",
                    style: {
                        stroke: '#000',
                        strokeWidth: '3px'
                    },
                    arrowheadStyle: {
                        fill: '#000',
                    }
                },
                {
                    from: 0,
                    to: 2,
                    label: "",
                    style: {
                        stroke: '#000',
                        strokeWidth: '3px'
                    },
                    arrowheadStyle: {
                        fill: '#000',
                    }
                }
            ]
        }
        this.testButtonHandler = this.testButtonHandler.bind(this)
    }

    componentDidMount() {

    }

    nodesOnClick(id){

    }

    testButtonHandler(){
        const nodes = this.state.nodes
        nodes[1].html = 
        <Node1 
        name= {"This is a very long text"}
        />
        this.setState(nodes)
    }

    render() {
        return (
            <div>
                <DagreD3
                    enableZooming = {true}
                    centerGraph = {true}
                    svgStyle= {this.svgStyle}
                    ref={this.graph}
                    nodesOnClick = {this.nodesOnClick}
                    nodes={this.state.nodes}
                    edges={this.state.edges}
                />
                <button onClick={this.testButtonHandler}>My Testing Button</button>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>
                <h1>asdasd</h1>

            </div>
        )
    }
}

export default App
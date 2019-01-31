import React, { Component } from 'react'
import DagreD3 from './dagreD3'
import Node1 from './components/node1'
import { Progress } from 'reactstrap';


class App extends Component {
    constructor() {
        super()
        this.text = "test"
        const nodeOuterStyle = {
            fill: "white", 
        }
        this.svgStyle = {
            width: "800px",
            height: "800px",
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
                {
                    id: 3,
                    html: <Node1 
                    name= {"bigBen 3"}
                    />,
                    style: nodeOuterStyle
                },
                {
                    id: 4,
                    html: <Node1 
                    name= {"bigBen 3"}
                    />,
                    style: nodeOuterStyle
                },
                {
                    id: 5,
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
                        strokeWidth: '3px',
                        fill: "white"
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
                        strokeWidth: '3px',
                        fill: "white"

                    },
                    arrowheadStyle: {
                        fill: '#000',
                    }
                },
                {
                    from: 1,
                    to: 4,
                    label: "",
                    style: {
                        stroke: '#000',
                        strokeWidth: '3px',
                        fill: "white"

                    },
                    arrowheadStyle: {
                        fill: '#000',
                    }
                },
                {
                    from: 2,
                    to: 3,
                    label: "",
                    style: {
                        stroke: '#000',
                        strokeWidth: '3px',
                        fill: "white"

                    },
                    arrowheadStyle: {
                        fill: '#000',
                    }
                },
                {
                    from: 3,
                    to: 4,
                    label: "",
                    style: {
                        stroke: '#000',
                        strokeWidth: '3px',
                        fill: "white"

                    },
                    arrowheadStyle: {
                        fill: '#000',
                    }
                },
                {
                    from: 3,
                    to: 5,
                    label: "",
                    style: {
                        stroke: '#000',
                        strokeWidth: '3px',
                        fill: "white"

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
        this.text = this.text +"ssss"
        nodes[1].html = 
        <Node1 
        name= {this.text }
        />
        const edges = this.state.edges
        edges.push(
            {
                from: 1,
                to: 2,
                label: "",
                style: {
                    stroke: '#000',
                    strokeWidth: '3px',
                    fill: "white"

                },
                arrowheadStyle: {
                    fill: '#000',
                }
            }
        )
        this.setState({nodes, edges})
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
                            <div className="text-center">50%</div>
             <Progress value={50} />    
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
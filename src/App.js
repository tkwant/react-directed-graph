import React, { Component } from 'react'
import DagreD3 from './dagreD3'
import Node1 from './components/node1'
import { Progress } from 'reactstrap';


class App extends Component {
    constructor() {
        super()
        this.text = "test"
        this.svgStyle = {
            width: "800px",
            border: "2px solid"

        }
        this.state = {
            nodes: [
                {
                    id: 0,
                    type: "node1",
                    title: "BigBen",
                    connection: [
                        {
                            id: 1,
                        }
                    ],
                },
                {
                    id: 1,
                    type: "node1",
                    title: "BigBen",
                    connection: [
                        {
                            id: 2, 
                        }
                    ],
                },
                {
                    id: 2,
                    type: "node1",
                    title: "BigBen",
                    connection: [
                        {
                            id: 3,
                            label: 'Very long label for line',
                        }
                    ],
                },
                {
                    id: 3,
                    type: "node1",
                    title: "BigBen",
                    connection: [
                        {
                            id: 4,
                            label: 'test label'
                        }
                    ],
                },
                {
                    id: 4,
                    type: "node1",
                    title: "BigBen",
                    connection: [
                        {
                            id: 5,
                        }
                    ],
                },
                {
                    id: 5,
                    type: "node1",
                    title: "BigBen",
                    connection: [
                        {
                            id: 1,
                            label: "",
                           lineStyle: {
                                stroke: 'red',
                                strokeWidth: '1.8px',
                                fill: 'white',
                                strokeDasharray: '5, 5'
                            },
                            arrowheadStyle: {
                                fill: 'red',
                                stroke: 'none'
                            }
                        }
                    ],
                },
            ],
        }
        this.testButtonHandler = this.testButtonHandler.bind(this)
    }

    componentDidMount() {

    }

    nodesOnClick(id) {

    }

    testButtonHandler() {
        const nodes = this.state.nodes
        this.text = this.text + "ssss"
        nodes[1].html =
            <Node1
                name={this.text}
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
        this.setState({ nodes, edges })
    }

    renderNodes() {
        return this.state.nodes.map((el) => {
            if (el.type = "node1") {
                return <Node1
                    {...el}
                />
            }
        })
    }

    render() {
        return (
            <div>
                <DagreD3
                    enableZooming={true}
                    centerGraph={true}
                    svgStyle={this.svgStyle}
                    ref={this.graph}
                    nodesOnClick={this.nodesOnClick}
                >
                    {this.renderNodes()}
                </DagreD3>
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
import React, { Component } from 'react'
import DagreD3 from './dagreD3'
import Node1 from './components/node1'
import './components/node.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor() {
        super()
        this.svgStyle = {
            width: "800px",
            border: "2px solid"

        }
        this.state = {
            nodes: [
                {
                    id: 0,
                    type: "node1",
                    title: "NODE 1",
                    footer: "CUCUMBER",
                    connection: [
                        {
                            id: 1,
                        },
                        {
                            id: 2,
                        }
                    ],
                },
                {
                    id: 1,
                    type: "node1",
                    title: "NODE 2",
                    footer: "CUCUMBER",
                    connection: [
                        {
                            id: 2,
                            label: 'test label ',

                        }
                    ],
                },
                {
                    id: 2,
                    type: "node1",
                    title: "NODE 3",
                    footer: "CUCUMBER",
                    connection: [
                        {
                            id: 0,
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
                }
                // {
                //     id: 3,
                //     type: "node1",
                //     title: "BigBen",
                //     connection: [
                //         {
                //             id: 4,
                //             label: 'test label'
                //         }
                //     ],
                // },
                // {
                //     id: 4,
                //     type: "node1",
                //     title: "BigBen",
                //     connection: [
                //         {
                //             id: 5,
                //         }
                //     ],
                // },
                // {
                //     id: 5,
                //     type: "node1",
                //     title: "BigBen",
                //     connection: [
                //         {
                //             id: 1,
                //             label: "",
                //             lineStyle: {
                //                 stroke: 'red',
                //                 strokeWidth: '1.8px',
                //                 fill: 'white',
                //                 strokeDasharray: '5, 5'
                //             },
                //             arrowheadStyle: {
                //                 fill: 'red',
                //                 stroke: 'none'
                //             }
                //         }
                //     ],
                // },
            ],
        }
        this.testButtonHandler = this.testButtonHandler.bind(this)
    }

    componentDidMount() {

    }

    nodesOnClick(id) {

    }

    testButtonHandler() {
        let state = this.state
        state.nodes[1].title += "U"
        this.setState(state)
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
                    // nodesOnClick={this.nodesOnClick}
                >
                    {this.renderNodes()}
                </DagreD3>
                <button onClick={this.testButtonHandler}>My Testing Button</button>
            </div>
        )
    }
}

export default App
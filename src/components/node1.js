import React from 'react'
import "./node.scss"

// Attention this is no a normal React Component it can only return view because it is in svg (foreign Object)

const node1 = (props) => {
    return (
        <div className="graph-node">
            <div className="graph-node-title" >{props.name}</div>
            <div className="graph-node-body"  >Body</div>
            <div className="graph-node-footer">zzz</div>
        </div>
    )
}
export default node1

// style= {{ border: '30px solid green', borderRightColor: 'green' }}
// style={{ color: 'white', height: 30, backgroundColor: 'blue', borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }}

// style={{ color: 'white', height: 30, backgroundColor: 'orange' }}

// style={{ color: 'white', height: 30, backgroundColor: '#28a745' }}
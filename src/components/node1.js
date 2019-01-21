import React from 'react'

// Attention this is no a normal React Component it can only return view because it is in svg (foreign Object)

const node1 = (props) => {
    return (
        <div>
            <div style={{ color: 'white', height: 30, backgroundColor: 'blue' }}>{props.name}</div>
            <div style={{ color: 'white', height: 30, backgroundColor: 'orange' }} >Body</div>
            <div style={{ color: 'white', height: 30, backgroundColor: '#28a745' }}>zzz</div>
        </div>
    )
}
export default node1



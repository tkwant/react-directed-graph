import React from 'react'
import { Progress, Button } from 'reactstrap';




const node1 = (props) => {
    return (
        <div className='graph-node'>
            <div className='graph-node-title'>{props.title}</div>
            <div className='graph-node-body'>
            <div className="text-center">50%</div>
             <Progress value={50} />    
             <Button  onClick= {()=>{
                 console.log("UUUUUUU")
             }} color="primary">primary</Button>{' '}

            </div>
            <div className='graph-node-footer'>zzz</div>
        </div>
    )
}
export default node1

// style= {{ border: '30px solid green', borderRightColor: 'green' }}
// style={{ color: 'white', height: 30, backgroundColor: 'blue', borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }}

// style={{ color: 'white', height: 30, backgroundColor: 'orange' }}

// style={{ color: 'white', height: 30, backgroundColor: '#28a745' }}
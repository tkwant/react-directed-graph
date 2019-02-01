import React from 'react'
import { Progress, FormGroup, Label, Input } from 'reactstrap';

class node1 extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className='graph-node'>
            <div className='graph-node-title'>{this.props.title}</div>
            <div className='graph-node-body'>
                <div className="text-center">50%</div>
                <Progress value={50} />
                <FormGroup check>
                    <Label check>
                        <Input onClick={() => {
                            console.log("This does not work")
                        }} type="checkbox" />{' '}
                        Check me out
                    </Label>
                </FormGroup>
            </div>
            <div className='graph-node-footer'>{this.props.footer}</div>
        </div>

        )
    }
}
export default node1

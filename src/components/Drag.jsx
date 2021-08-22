import React, { Component } from 'react'
import "../styles/Drag.css"

export class Drag extends Component {

constructor(props){
    super(props);

    this.dragReg=React.createRef();
}
    startDrag=(event)=>{
        console.log("hi")
    }

    render() {
        return (
            <div ref={this.dragReg} onMouseDown={this.startDrag} className='drag'>
                Bori
            </div>
        )
    }
}

export default Drag

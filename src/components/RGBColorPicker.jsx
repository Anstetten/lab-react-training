import React, { Component } from 'react'
import "../styles/RGBColorPicker.css";
import SingleColorPicker from "./SingleColorPicker";

export class RGBColorPicker extends Component {

    state={
        rValue:255,
        gValue:255,
        bValue:255,
    }

    handleColorChange= (color,value)=>{
        
        this.setState({
            [`${color}Value`]:value,
            })

    }

    render() {
        let boxStyle = {backgroundColor:`rgb(${this.state.rValue},${this.state.gValue},${this.state.bValue})`}

        return (
            <div className="RGBWrapper">
                <SingleColorPicker color="r" value={this.state.rValue} changeColor={this.handleColorChange}/>
                <SingleColorPicker color="g" value={this.state.gValue} changeColor={this.handleColorChange}/>
                <SingleColorPicker color="b" value={this.state.bValue} changeColor={this.handleColorChange}/>
                <div className="finalColorWrapper">
                    <div style={boxStyle} className="colorBox">

                    </div>
                    <span>rgb({this.state.rValue},{this.state.gValue},{this.state.bValue})</span>
                </div>
            </div>
        )
    }
}

export default RGBColorPicker

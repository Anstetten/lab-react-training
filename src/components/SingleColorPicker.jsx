import React, { Component } from 'react'
import "../styles/SingleColorPicker.css";

const SingleColorPicker = (props) => {

        let color =props.color;
        let value=props.value;       

    function changeColor (event) {      
           props.changeColor(color,event.target.value)
    }

        let boxStyle;
        switch (color){

            case "r":
                boxStyle = {backgroundColor:`rgb(${value},0,0)`};
                break;
            case "g":
                boxStyle = {backgroundColor:`rgb(0,${value},0)`};
                break;
            case "b":
                boxStyle = {backgroundColor:`rgb(0,0,${value})`};
                break;

        }

        return (
            <div>
                
            <div className="finalColorWrapper">
                    <div style={boxStyle} className="colorBox">
                    </div>
                    <span>R:<input onChange={changeColor} type="number" min="0" max="255"value={value}></input></span>
            </div>
            </div>
        )
}

export default SingleColorPicker




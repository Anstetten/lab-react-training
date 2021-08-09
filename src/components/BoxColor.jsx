import "../styles/BoxColor.css";
import React from 'react';

const BoxColor = (props) =>{

    let style= {backgroundColor: `rgb(${props.r},${props.g},${props.b})`} 
    return <div style={style} className="boxColor"></div>

}

export default BoxColor;
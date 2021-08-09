import "../styles/Random.css";
import React from 'react';

const Random = (props)=>{
    let randomNumber = props.min+Math.floor(Math.random() * (props.max-props.min));
    return <div className="randomNumber">Random value between {props.min} and {props.max} "=>" {randomNumber}</div>
}

export default Random;
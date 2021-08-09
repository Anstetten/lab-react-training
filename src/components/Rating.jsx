import "../styles/Rating.css";
import React from 'react';

const Rating = (props)=>{

    let empty = "☆";
    let full = "★";
    let rating = props.children;

    let ratingFinal= (rating%1<0.5) ? Math.floor(rating) : Math.ceil(rating);

    let ratingSTR = full.repeat(ratingFinal)+empty.repeat(5-ratingFinal);

    return <div className="rating">{ratingSTR}</div>

}

export default Rating;
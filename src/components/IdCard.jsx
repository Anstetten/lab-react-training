import "../styles/IdCard.css";
import React from 'react';

const IdCard = (props)=>{
    return (<div className="IdCard">
            <div className="IdCard-avatar">
                <img src={props.picture} />
            </div>
            <div className="IdCard-information">
                <p><strong>First Name: </strong>    {props.lastName}</p>
                <p><strong>Last Name: </strong>     {props.firstName}</p>
                <p><strong>Gender: </strong>        {props.gender}</p>
                <p><strong>Height: </strong>        {(props.height/100).toFixed(2)}m</p>
                <p><strong>Birth: </strong>         {String(props.birth.toDateString())}</p>
            </div>
        </div>);
};

export default IdCard;
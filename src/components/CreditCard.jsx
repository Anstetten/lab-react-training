import "../styles/CreditCard.css";
import React from 'react';
import visa from "../images/visa.png";
import masterCard from "../images/masterCard.png";

const CreditCard = (props)=>{

    let style={
        backgroundColor: props.bgColor,
        color: props.color,
       }

    let image = (props.type==="Visa") ? visa :masterCard;
    let last4digits= props.number.slice(-4);

    return (<div style={style} className="creditCardCrapper">
        <div className="bankLogo">
            <img src={image} alt="bank image"/>
        </div>
        <div className="cardNumber"><span>••••</span>  <span>••••</span>  <span>••••</span>  <span>{last4digits}</span> </div>
        <div className="cardData">
        <div className="cardInfo"><span>Expires: {props.expirationMonth}/{props.expirationYear%1000}</span> <span className="bankName">{props.bank}</span></div>
        <div className="owner">{props.owner}</div>
        </div>
    </div>)

}

export default CreditCard;
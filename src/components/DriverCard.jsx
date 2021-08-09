import "../styles/DriverCard.css";
import React from 'react';
import Rating from "./Rating";

const DriverCard = (props) =>{



    return <div className="driverCard">
        <div className="driverWrapper">

        <img src={props.img} alt="driver image"></img>
        <div className="driverCardInfo">
            <div className="driverCardName">
                <span>{props.name}</span>
            </div>
            <Rating>{props.rating}</Rating>
            <div className="driverCardCar">
                <span>{props.car.model}</span>
                <span> - </span>
                <span>{props.car.licensePlate}</span>
            </div>
        </div>

        </div>
        

    </div>
}

export default DriverCard;
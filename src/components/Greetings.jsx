import "../styles/Greetings.css";
import React from 'react';

const Greetings = (props)=>{
    let greeting="";
    switch (props.lang){
        case 'en':
            greeting="Hello";
            break;
        case 'de':
            greeting="Hallo";
            break;
        case 'es':
            greeting="Hola";
            break;
        case 'fr':
            greeting="Bonjour";
            break;
    }
    return (<div className="greetingCard">
                <span>{greeting} {props.children}!</span>
    </div>)

}

export default Greetings;
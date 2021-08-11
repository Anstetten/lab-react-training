import React, { Component } from 'react'
import "../styles/Dice.css";

export class Dice extends Component {

    constructor(props) {
        super(props);
        this.empty ='/img/dice-empty.png'; 
        this.images =[
            '/img/dice1.png',
            '/img/dice2.png',
            '/img/dice3.png',
            '/img/dice4.png',
            '/img/dice5.png',
            '/img/dice6.png',
        ];
        this.state = {
            imgSRC: this.images[Math.floor(Math.random()*this.images.length)],
        };
    }

    // images =[
    //     '/img/dice1.png',
    //     '/img/dice2.png',
    //     '/img/dice3.png',
    //     '/img/dice4.png',
    //     '/img/dice5.png',
    //     '/img/dice6.png',
    // ]

    getRandomNumber = ()=>{
        let image = this.images[Math.floor(Math.random()*this.images.length)];
        this.setState({imgSRC:this.empty},()=>{
            setTimeout(()=>{
                this.setState({imgSRC:image});
            },1000)
        });    

    }

    render() {
        return (
            <div className="dice">
                <img onClick={this.getRandomNumber} src={this.state.imgSRC} alt="dice" />
            </div>
        )
    }
}

export default Dice

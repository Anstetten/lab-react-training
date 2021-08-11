import React, { Component } from 'react'
import "../styles/NumbersTable.css";

export class NumbersTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
          limit: props.limit,
        };
    }

    render() {

        let array = [];
        for (let i = 1; i<= this.state.limit;i++){array.push(i)};

        return (
            <div className="numbersTableWrapper">
                {
                    array.map((number)=>{
                        return (number%2===1) ? 
                        <li key={number} className ="number oddNumber"><span>{number}</span></li> :
                        <li key={number} className ="number evenNumber"><span>{number}</span></li>
                    })
                }
            </div>
        )
    }
}

export default NumbersTable

import React, { Component } from 'react'

export class LikeButton extends Component {

    state ={
        count:0,
        background:'red',
    };

    handleClick = ()=>{
        let colors = ['purple','blue','green','yellow','orange','red'];
        let newColor = colors[Math.floor(Math.random()*(colors.length))];
        this.setState({count: this.state.count +1,
            background: newColor,})

    }

    render() {
        let style= {backgroundColor: `${this.state.background}`} 
        return (
            <div>
                <button style={style} onClick={this.handleClick}>{(this.state.count)} {(this.state.count>1) ? "Likes" : "Like"}</button>
            </div>
        )
    }
}

export default LikeButton

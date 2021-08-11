import React, { Component } from 'react'

export class ClickablePicture extends Component {

    constructor(props) {
        super(props);
        this.state = {
          imageSRC: props.img,
        };
    }

    click = ()=>{
        let newSRC="";
        newSRC= (this.state.imageSRC===this.props.img) ? this.props.imgClicked : this.props.img;
        this.setState({imageSRC: newSRC,});
    }

    render() {
        return (
            <div>
                <img onClick={this.click} src={this.state.imageSRC}alt="max"></img>
            </div>
        )
    }
}

export default ClickablePicture

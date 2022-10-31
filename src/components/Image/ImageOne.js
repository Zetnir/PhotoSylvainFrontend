import React, { Component }  from 'react';
import '../../App.css';

class ImageOne extends Component {

    defaultProps = {
        borderSize: 0,
        height: 0,
        fullScreen: false,
        url: ""
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.height);
    }



    render() {
        return (
            <div className='h-100' style={{maxHeight: `${this.props.fullScreen ? "90%" : this.props.height}`}}>
                <div className='h-100' style={{maxHeight: `${this.props.fullScreen ? "90%" : this.props.height}`}}>
                    <img 
                        className={`image-one ${this.props.fullScreen ? " full-screen": ""}`} 
                        src={this.props.url} 
                        style={{height: this.props.height, paddingLeft: this.props.borderSize, paddingRight: this.props.borderSize}} 
                    alt="Italian Trulli"/>
                    <div className='d-flex flex-column-reverse align-items-start' style={{height: "90%"}}>
                        <h1 style={{fontSize: "6vw"}}>SYBLS PHOTOGRAPHY</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageOne;

import React, { Component }  from 'react';
import '../../App.css';

class ImageOne extends Component {
    state = {
        url: "/images/white_bikini.jpg"
    }

    defaultProps = {
        borderSize: 0,
        height: 0,
        fullScreen: false,
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.height);
    }



    render() {
        return (
            <div>
                <div style={{heigth: this.props.height - 80}}>
                    <img 
                        className={`image-one ${this.props.fullScreen ? " full-screen": ""}`} 
                        src={this.state.url} 
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

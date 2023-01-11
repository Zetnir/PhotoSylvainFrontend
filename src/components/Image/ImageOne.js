import React, { Component } from "react";
import "../../App.css";

class ImageOne extends Component {
  defaultProps = {
    borderSize: 0,
    height: 0,
    fullScreen: false,
    url: "",
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.height);
  }

  render() {
    return (
      <div className="container">
        <img
          className={`image-one ${this.props.fullScreen ? " full-screen" : ""}`}
          src={this.props.url}
          style={{
            height: this.props.height,
            paddingLeft: this.props.borderSize,
            paddingRight: this.props.borderSize,
          }}
          alt="Italian Trulli"
        />
      </div>
    );
  }
}

export default ImageOne;

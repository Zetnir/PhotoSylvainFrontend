import React, { Component } from "react";
import "../../App.css";

class FullscreenBanner extends Component {
  defaultProps = {
    borderSize: 0,
    height: 0,
    fullScreen: false,
    url: "",
    heading: "",
    headingSize: "",
    preHeading: "",
    preHeadingSize: "",
    buttonText: "",
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.height);
  }

  render() {
    return (
      <div>
        <img
          src={this.props.url}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            filter: "brightness(90%)",
            top: 0,
            left: 0,
          }}
          alt="Italian Trulli"
        />
        <div
          className="d-flex flex-column align-items-start justify-content-end"
          style={{
            height: "calc(100vh - 80px)",
            padding: "80px 160px",
          }}
        >
          <h1 style={{ fontSize: this.props.headingSize }}>
            {this.props.heading}
          </h1>
          <p
            className="text-white"
            style={{ fontSize: this.props.preHeadingSize }}
          >
            {this.props.preHeading}
          </p>
          <button
            className="p-3"
            style={{
              border: "0px",
            }}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/contact";
            }}
          >
            {this.props.buttonText}
          </button>
        </div>
      </div>
    );
  }
}

export default FullscreenBanner;

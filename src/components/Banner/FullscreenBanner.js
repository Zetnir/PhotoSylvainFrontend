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
    link: "",
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.height);
  }

  render() {
    return (
      <div style={{ position: "relative" }}>
        <img
          src={this.props.url}
          style={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            zIndex: -1,
            filter: "brightness(90%)",
            top: -80,
            left: 0,
          }}
          alt="Italian Trulli"
        />
        <div
          className="d-flex flex-column align-items-start justify-content-end"
          style={{
            height: "calc(100vh - 80px)",
            padding: "80px 250px",
          }}
        >
          <h1 style={{ fontSize: this.props.headingSize }}>
            {this.props.heading}
          </h1>
          <p
            className="text-white text-left"
            style={{ fontSize: this.props.preHeadingSize, width: "300px" }}
          >
            {this.props.preHeading}
          </p>
          <a
            className="p-0"
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "var(--secondary-color)",
              textTransform: "capitalize",
            }}
            href={this.props.link}
          >
            {this.props.buttonText} <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default FullscreenBanner;

import React, { Component } from "react";
import "../../App.css";
import BasicBanner from "./BasicBanner";

class ButtonBanner extends Component {
  defaultProps = {
    height: 0,
    text: "",
    url: "",
    heading: "",
    preHeading: "",
    headingSize: "",
    preHeadingSize: "",
    buttonText: "",
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{
          position: "relative",
          height: this.props.height,
          overflow: "hidden",
        }}
      >
        <BasicBanner
          url={this.props.url}
          heading={this.props.heading}
          headingSize={this.props.headingSize}
          preHeading={this.props.preHeading}
          preHeadingSize={this.props.preHeadingSize}
        />
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
    );
  }
}

export default ButtonBanner;

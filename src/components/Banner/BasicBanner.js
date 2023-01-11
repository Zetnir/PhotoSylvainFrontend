import React, { Component } from "react";
import "../../App.css";

class BasicBanner extends Component {
  defaultProps = {
    url: "",
    heading: "",
    prpeHeading: "",
    headingSize: "",
    preHeadingSize: "",
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <img
          src={this.props.url}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            filter: "brightness(60%)",
            top: 0,
            left: 0,
          }}
          alt="Italian Trulli"
        />
        <h1
          className="text-center"
          style={{ fontSize: this.props.headingSize }}
        >
          {this.props.heading}
        </h1>
        <p
          className="text-center text-white"
          style={{ fontSize: this.props.preHeadingSize }}
        >
          {this.props.preHeading}
        </p>
      </>
    );
  }
}

export default BasicBanner;

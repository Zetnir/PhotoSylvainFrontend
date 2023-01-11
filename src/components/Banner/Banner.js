import React, { Component } from "react";
import "../../App.css";
import BasicBanner from "./BasicBanner";

class Banner extends Component {
  defaultProps = {
    height: 0,
    text: "",
    url: "",
    heading: "",
    preHeading: "",
    headingSize: "",
    preHeadingSize: "",
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
      </div>
    );
  }
}

export default Banner;

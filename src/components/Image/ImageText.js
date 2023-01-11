import React, { Component } from "react";
import "../../App.css";

class ImageText extends Component {
  defaultProps = {
    height: 0,
    text: "",
    url: "",
    heading: "",
    preHeading: "",
    headingSize: "",
    preHeadingSize: "",
    description: "",
  };

  state = {
    seeMore: "see more >",
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.height);
  }

  render() {
    return (
      <>
        {this.props.left ? (
          <div className="d-flex">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ overflow: "hidden", height: "800px", maxWidth: "800px" }}
            >
              <img
                src={this.props.url}
                style={{ objectFit: "contain", height: "100%" }}
                alt="Italian Trulli"
              />
            </div>
            <div className="m-4 p-4 text-left d-flex flex-column justify-content-center">
              <h1>{this.props.heading}</h1>
              <p>{this.props.preHeading}</p>
              <p>{this.props.description}</p>
              <a className="text-dark" href="/work">
                {this.state.seeMore}
              </a>
            </div>
          </div>
        ) : (
          <div className="d-flex">
            <div className="m-4 p-4 text-right d-flex flex-column justify-content-center">
              <h1 className="text-right p-0">{this.props.heading}</h1>
              <p>{this.props.preHeading}</p>
              <p>{this.props.description}</p>
              <a className="text-dark" href="/work">
                {this.state.seeMore}
              </a>
            </div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ overflow: "hidden", height: "800px", maxWidth: "800px" }}
            >
              <img
                src={this.props.url}
                style={{ objectFit: "contain", height: "100%" }}
                alt="Italian Trulli"
              />
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ImageText;

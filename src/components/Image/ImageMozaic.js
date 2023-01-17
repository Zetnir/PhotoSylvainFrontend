import React, { Component } from "react";
import "../../App.css";
import "./ImageMozaic.css";

class ImageMozaic extends Component {
  state = {};

  defaultProps = {
    images: [
      {
        url: "",
      },
    ],
  };

  constructor(props) {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container section" style={{ overflow: "hidden" }}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex">
            <h1 className="text-center mx-2 px-0">{this.props.title1}</h1>
            <h1 className="text-center text-effect p-0">{this.props.title2}</h1>
          </div>
          <div
            className="my-4"
            style={{
              border: "solid rgba(255,255,255,0.2)",
              borderWidth: "1px 0px 0px 0px",
              width: "40px",
            }}
          ></div>
        </div>
        <div className="row">
          <div className="col col-4">
            {this.props.images.map((image, index) => {
              if (index % 3 === 0) {
                return (
                  <div
                    className="card my-4"
                    style={{
                      overflow: "hidden",
                      position: "relative",
                      border: "none",
                    }}
                  >
                    <img style={{ objectFit: "contain" }} src={image.url}></img>
                    <div className="card-inner d-flex justify-content-center align-items-center">
                      <h3>{image.text}</h3>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="col col-4">
            {this.props.images.map((image, index) => {
              if (index % 3 === 1) {
                return (
                  <div
                    className="card my-4"
                    style={{
                      overflow: "hidden",
                      position: "relative",
                      border: "none",
                    }}
                  >
                    <img style={{ objectFit: "contain" }} src={image.url}></img>
                    <div className="card-inner d-flex justify-content-center align-items-center">
                      <h3>{image.text}</h3>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="col col-4">
            {this.props.images.map((image, index) => {
              if (index % 3 === 2) {
                return (
                  <div
                    className="card my-4"
                    style={{
                      overflow: "hidden",
                      position: "relative",
                      border: "none",
                    }}
                  >
                    <img style={{ objectFit: "contain" }} src={image.url}></img>
                    <div className="card-inner d-flex justify-content-center align-items-center">
                      <h3>{image.text}</h3>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ImageMozaic;

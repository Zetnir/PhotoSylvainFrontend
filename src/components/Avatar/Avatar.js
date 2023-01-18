import React, { Component } from "react";
import "../../App.css";

class Avatar extends Component {
  defaultProps = {
    url: "",
    heading: "",
    preHeading: "",
    headingSize: "",
    preHeadingSize: "",
    description: "",
    descriptionSize: "",
    data: {
      tab1: {
        title: "",
        number: "",
      },
      tab2: {
        title: "",
        number: "",
      },
      tab3: {
        title: "",
        number: "",
      },
    },
    buttonText: "",
    link: "",
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="section">
        <div className="d-flex flex-wrap">
          <div className="col col-5">
            <div style={{ maxHeight: "600px", aspectRatio: "1/1" }}>
              <img
                src={this.props.url}
                style={{
                  minHeight: "100%",
                  minWidth: "100%",
                  objectFit: "cover",
                }}
                alt="Avatar"
                class="avatar"
              />
            </div>
          </div>
          <div className="col col-7 text-left">
            <h4 className="text-effect">{this.props.preHeading}</h4>
            <h1>{this.props.heading}</h1>
            <div
              className="my-4"
              style={{
                border: "solid rgba(255,255,255,0.2)",
                borderWidth: "1px 0px 0px 0px",
                width: "40px",
              }}
            ></div>
            <p className="py-4">{this.props.description}</p>
            <div className="d-flex align-items-center justify-content-center">
              <div className="d-flex flex-column align-items-center justify-content-center px-4 mx-4">
                <h1 className="text-effect p-0">
                  {this.props.data.tab1.number}
                </h1>
                <h5>{this.props.data.tab1.title}</h5>
              </div>
              <div
                className="my-4"
                style={{
                  border: "solid rgba(255,255,255,0.2)",
                  borderWidth: "0px 1px 0px 0px",
                  height: "40px",
                }}
              ></div>
              <div className="d-flex flex-column align-items-center justify-content-center px-4 mx-4">
                <h1 className="text-effect p-0">
                  {this.props.data.tab2.number}
                </h1>
                <h5>{this.props.data.tab2.title}</h5>
              </div>
              <div
                className="my-4"
                style={{
                  border: "solid rgba(255,255,255,0.2)",
                  borderWidth: "0px 1px 0px 0px",
                  height: "40px",
                }}
              ></div>
              <div className="d-flex flex-column align-items-center justify-content-center px-4 mx-4">
                <h1 className="text-effect p-0">
                  {this.props.data.tab3.number}
                </h1>
                <h5>{this.props.data.tab3.title}</h5>
              </div>
            </div>
            <a
              className="text-effect link-nav d-flex pt-4"
              href={this.props.link}
            >
              {this.props.buttonText}
              <i className="ml-1 fas fa-angles-right fa-xs d-flex align-items-center"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Avatar;

import React, { Component } from "react";
import "../../App.css";

class Footer extends Component {
  state = {};

  defaultProps = {
    height: 400,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <a>Instagram</a>
              <a>Twitter</a>
              <a>Youtube</a>
            </div>
            <div className="col">
              <a>Work</a>
              <a>About</a>
              <a>Contact</a>
            </div>
            <div className="col"></div>
            <div className="col">
              <a>Politique de confidentialité</a>
            </div>
            <div className="col">
              <a>FAQ</a>
            </div>
          </div>
          <div className="row ">
            <div className="col">COPYRIGHT © 2022 Photo SYLVAIN</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

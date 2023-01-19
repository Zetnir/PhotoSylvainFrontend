import React, { Component } from "react";
import "../../App.css";
import Viewer from "../Viewer/Viewer";

class ProductList extends Component {
    defaultProps = {
        product1: {
            title: "",
            description: "",
            link: "",
            image: ""
        },
        product2: {
            title: "",
            description: "",
            link: "",
            image: ""
        },
        product3: {
            title: "",
            description: "",
            link: "",
            image: ""
        }
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.height);
    }

    render() {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                        height: "70vh",
                        width: "33%",
                        overflow: "hidden",
                        position: "relative"
                    }}
                >
                    <img
                        style={{
                            objectFit: "cover",
                            minHeight: "100%",
                            minWidth: "100%"
                        }}
                        src={this.props.product1.image}
                    />
                    <div className="card-inner d-flex justify-content-center align-items-center">
                        <h3>{this.props.product1.title}</h3>
                    </div>
                </div>
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                        height: "70vh",
                        width: "34%",
                        overflow: "hidden",
                        position: "relative"
                    }}
                >
                    <img
                        style={{
                            objectFit: "cover",
                            minHeight: "100%",
                            minWidth: "100%"
                        }}
                        src={this.props.product2.image}
                    />
                    <div className="card-inner d-flex justify-content-center align-items-center">
                        <h3>{this.props.product2.title}</h3>
                    </div>
                </div>
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                        height: "70vh",
                        width: "33%",
                        overflow: "hidden",
                        position: "relative"
                    }}
                >
                    <img
                        style={{
                            objectFit: "fill",
                            minHeight: "100%",
                            minWidth: "100%"
                        }}
                        src={this.props.product3.image}
                    />
                    <div className="card-inner d-flex justify-content-center align-items-center">
                        <h3>{this.props.product3.title}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;

import React, { Component } from "react";
import "../../App.css";

class Viewer extends Component {
    defaultProps = {
        imagesList: [
            {
                url: ""
            }
        ],
        startingIndex: -1,
        isShowed: false,
        changeShowed: value => {}
    };

    state = {
        currentIndex: 0
    };

    constructor(props) {
        super(props);
        this.onOutsideClick = this.onOutsideClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            currentIndex: this.props.startingIndex
        });
        console.log(this.props.isShowed);
    }

    onOutsideClick(e) {
        e.preventDefault();
        this.props.changeShowed(false);
    }

    render() {
        return (
            <div
                className="justify-content-center align-items-center"
                onClick={this.onOutsideClick}
                style={{
                    display: `${this.props.isShowed ? "flex" : "none"}`,
                    position: "fixed",
                    zIndex: 10,
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backdropFilter: "blur(10px)",
                    background: "rgba(0,0,0,0.6)"
                }}
            >
                <img
                    src={this.props.imagesList[this.state.currentIndex].url}
                    style={{
                        maxWidth: "80%",
                        maxHeight: "80%",
                        objectFit: "contain"
                    }}
                />
            </div>
        );
    }
}

export default Viewer;

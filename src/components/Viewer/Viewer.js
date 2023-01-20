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
        currentIndex: -1
    };

    constructor(props) {
        super(props);
        this.onOutsideClick = this.onOutsideClick.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);
    }

    componentDidMount() {}

    onOutsideClick(e) {
        e.preventDefault();
        this.props.changeShowed(false);
        this.setState({
            ...this.state,
            currentIndex: -1
        });
    }

    nextImage(e) {
        e.preventDefault();
        let index = this.state.currentIndex;
        if (index === -1) {
            index = this.props.startingIndex;
        }
        index = index + 1;
        this.setState({
            ...this.state,
            currentIndex: index
        });
    }

    previousImage(e) {
        e.preventDefault();
        let index = this.state.currentIndex;
        if (index === -1) {
            index = this.props.startingIndex;
        }
        index = index - 1;
        this.setState({
            ...this.state,
            currentIndex: index
        });
        console.log(this.props.startingIndex);
    }

    render() {
        return (
            <div
                className="justify-content-center align-items-center"
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
                <button
                    className="p-4"
                    onClick={this.onOutsideClick}
                    style={{
                        position: "absolute",
                        right: "2%",
                        top: "4%",
                        background: "rgba(0,0,0,0)",
                        color: "rgba(255,255,255,0.7)",
                        border: "none"
                    }}
                >
                    <i className="fas fa-xmark fa-2x"></i>
                </button>
                {(this.state.currentIndex > 0 ||
                    this.state.currentIndex === -1) && (
                    <button
                        onClick={this.previousImage}
                        className="p-4 m-4 btn btn-light"
                        style={{
                            background: "rgba(0,0,0,0)",
                            color: "rgba(255,255,255,0.7)",
                            border: "none",
                            position: "absolute",
                            top: "calc(50% - 72px)",
                            left: "3%"
                        }}
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                )}
                <img
                    src={
                        this.props.imagesList[
                            this.state.currentIndex === -1
                                ? this.props.startingIndex
                                : this.state.currentIndex
                        ].url
                    }
                    style={{
                        maxWidth: "80%",
                        maxHeight: "80%",
                        objectFit: "contain"
                    }}
                />
                {(this.state.currentIndex < this.props.imagesList.length - 1 ||
                    this.state.currentIndex === -1) && (
                    <button
                        onClick={this.nextImage}
                        className="p-4 m-4 btn btn-light"
                        style={{
                            background: "rgba(0,0,0,0)",
                            color: "rgba(255,255,255,0.7)",
                            border: "none",
                            position: "absolute",
                            top: "calc(50% - 72px)",
                            right: "3%"
                        }}
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                )}
            </div>
        );
    }
}

export default Viewer;

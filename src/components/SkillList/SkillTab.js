import React, { Component } from "react";
import "../../App.css";
import Viewer from "../Viewer/Viewer";

class SkillTab extends Component {
    defaultProps = {
        heading: "",
        skills: [
            {
                icon: "",
                title: "",
                description: ""
            }
        ]
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.height);
    }

    render() {
        return (
            <div className="section">
                <div>
                    <h2>{this.props.heading}</h2>
                </div>
                <div
                    className="my-4 mx-auto"
                    style={{
                        border: "solid rgba(255,255,255,0.2)",
                        borderWidth: "1px 0px 0px 0px",
                        width: "100px"
                    }}
                ></div>
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                    {this.props.skills.map((skill, index) => (
                        <div
                            className="d-flex flex-column justify-content-center align-items-center p-4"
                            style={{ width: "360px" }}
                            key={index}
                        >
                            <div
                                className="p-2 m-2 d-flex justify-content-center align-items-center avatar"
                                style={{
                                    height: "100px",
                                    width: "100px",
                                    border: "solid 1px var(--secondary-color)",
                                    overflow: "hidden"
                                }}
                            >
                                <img
                                    src={skill.icon}
                                    className="p-2"
                                    style={{
                                        minHeight: "100%",
                                        minWidth: "100%",
                                        objectFit: "contain"
                                    }}
                                />
                            </div>
                            <h4 className="text-center">{skill.title}</h4>
                            <p className="text-center">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default SkillTab;

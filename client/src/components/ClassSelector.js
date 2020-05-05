import _ from "lodash";
import React, { Component } from "react";
import axios from "axios";

import ClassSelectorType from "./ClassSelectorType";

class ClassSelector extends Component {
    constructor(props) {
        super(props);

        this.state = { classes: {} };
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:8000/api/app/classes"
        }).then((res) => {
            this.setState({ classes: res.data });
        });
    }

    render() {
        return (
            <div>
                <ClassSelectorType
                    type="Beginner"
                    student={this.props.name}
                    classes={_.filter(this.state.classes, { type: "Beginner" })}
                    selectClass={this.props.selectClass}
                />
                <ClassSelectorType
                    type="Intermediate"
                    student={this.props.name}
                    classes={_.filter(this.state.classes, {
                        type: "Intermediate"
                    })}
                    selectClass={this.props.selectClass}
                />
                <ClassSelectorType
                    type="Advanced"
                    student={this.props.name}
                    classes={_.filter(this.state.classes, { type: "Advanced" })}
                    selectClass={this.props.selectClass}
                />
                <ClassSelectorType
                    type="Master"
                    student={this.props.name}
                    classes={_.filter(this.state.classes, { type: "Master" })}
                    selectClass={this.props.selectClass}
                />
                <ClassSelectorType
                    type="Unique"
                    student={this.props.name}
                    classes={_.filter(this.state.classes, { type: "Unique" })}
                    selectClass={this.props.selectClass}
                />
            </div>
        );
    }
}

export default ClassSelector;

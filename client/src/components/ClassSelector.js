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
                    selectClassGoal={this.props.selectClassGoal}
                />
                <ClassSelectorType
                    type="Intermediate"
                    student={this.props.name}
                    classes={_.filter(this.state.classes, {
                        type: "Intermediate"
                    })}
                    selectClassGoal={this.props.selectClassGoal}
                />
                <ClassSelectorType
                    type="Advanced"
                    student={this.props.name}
                    classes={_.filter(this.state.classes, { type: "Advanced" })}
                    selectClassGoal={this.props.selectClassGoal}
                />
                <ClassSelectorType
                    type="Master"
                    student={this.props.name}
                    classes={_.filter(this.state.classes, { type: "Master" })}
                    selectClassGoal={this.props.selectClassGoal}
                />
                <ClassSelectorType
                    type="Unique"
                    student={this.props.name}
                    classes={_.filter(this.state.classes, { type: "Unique" })}
                    selectClassGoal={this.props.selectClassGoal}
                />
            </div>
        );
    }
}

export default ClassSelector;

import _ from "lodash";
import React, { Component } from "react";
import axios from "axios";

import ClassSelectorType from "../components/ClassSelectorType";

// TODO: fix reloading on selection,
// maybe store changes in state and
// have save button to update db
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
        const { name } = this.props.match.params;

        const types = [
            "Beginner",
            "Intermediate",
            "Advanced",
            "Master",
            "Unique"
        ];

        return (
            <div>
                <h1>Select Classes for {name}</h1>
                {types.map((type) => {
                    return (
                        <ClassSelectorType
                            type={type}
                            student={name}
                            classes={_.filter(this.state.classes, {
                                type
                            })}
                            selectClassGoal={this.props.selectClassGoal}
                            key={type}
                        />
                    );
                })}
            </div>
        );
    }
}

export default ClassSelector;

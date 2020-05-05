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
        return (
            <div>
                <h1>Select Classes for {name}</h1>
                <ClassSelectorType
                    type="Beginner"
                    student={name}
                    classes={_.filter(this.state.classes, { type: "Beginner" })}
                    selectClassGoal={this.props.selectClassGoal}
                />
                <ClassSelectorType
                    type="Intermediate"
                    student={name}
                    classes={_.filter(this.state.classes, {
                        type: "Intermediate"
                    })}
                    selectClassGoal={this.props.selectClassGoal}
                />
                <ClassSelectorType
                    type="Advanced"
                    student={name}
                    classes={_.filter(this.state.classes, { type: "Advanced" })}
                    selectClassGoal={this.props.selectClassGoal}
                />
                <ClassSelectorType
                    type="Master"
                    student={name}
                    classes={_.filter(this.state.classes, { type: "Master" })}
                    selectClassGoal={this.props.selectClassGoal}
                />
                <ClassSelectorType
                    type="Unique"
                    student={name}
                    classes={_.filter(this.state.classes, { type: "Unique" })}
                    selectClassGoal={this.props.selectClassGoal}
                />
            </div>
        );
    }
}

export default ClassSelector;

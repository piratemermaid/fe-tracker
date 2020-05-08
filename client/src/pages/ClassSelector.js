import _ from "lodash";
import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../constants";

import ClassSelectorType from "../components/ClassSelectorType";
import Grid from "@material-ui/core/Grid";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

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
            url: `${API_URL}/api/app/classes`
        }).then((res) => {
            this.setState({ classes: res.data });
        });
    }

    render() {
        if (!this.props.playthrough) {
            return "loading...";
        }

        const { name } = this.props.match.params;

        const types = [
            "Beginner",
            "Intermediate",
            "Advanced",
            "Master",
            "Unique"
        ];

        const { students, house } = this.props.playthrough;

        return (
            <div className="padding">
                <KeyboardBackspaceIcon
                    onClick={() => {
                        this.props.history.push(`/student/${name}`);
                    }}
                />
                <h1>Select Classes for {name}</h1>
                <Grid container spacing={1}>
                    {types.map((type) => {
                        const studentInfo = _.find(students, { name });
                        return (
                            <Grid item xs={12} md={6}>
                                <ClassSelectorType
                                    type={type}
                                    student={name}
                                    classes={_.filter(this.state.classes, {
                                        type
                                    })}
                                    studentClasses={studentInfo.classes}
                                    house={house}
                                    selectClassGoal={this.props.selectClassGoal}
                                    key={type}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        );
    }
}

export default ClassSelector;

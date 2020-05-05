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
            console.log(res);
            this.setState({ classes: res.data });
        });
    }

    render() {
        console.log(_.filter(this.state.classes, { type: "Beginner" }));
        return (
            <div>
                <ClassSelectorType
                    type="Beginner"
                    classes={_.filter(this.state.classes, { type: "Beginner" })}
                />
                <ClassSelectorType
                    type="Intermediate"
                    classes={_.filter(this.state.classes, {
                        type: "Intermediate"
                    })}
                />
                <ClassSelectorType
                    type="Advanced"
                    classes={_.filter(this.state.classes, { type: "Advanced" })}
                />
                <ClassSelectorType
                    type="Master"
                    classes={_.filter(this.state.classes, { type: "Master" })}
                />
                <ClassSelectorType
                    type="Unique"
                    classes={_.filter(this.state.classes, { type: "Unique" })}
                />
            </div>
        );
    }
}

export default ClassSelector;

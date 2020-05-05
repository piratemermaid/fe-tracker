import _ from "lodash";
import React from "react";
import { withRouter } from "react-router";

import ClassSelector from "../components/ClassSelector";

const EditStudent = (props) => {
    if (!props.playthrough) {
        return "loading...";
    }

    const { name } = props.match.params;
    console.log(props);

    const data = _.find(props.playthrough.students, { name });
    const { classes, skills } = data;

    return (
        <div>
            <h1>Edit {name}</h1>
            {classes.length < 1 ? (
                <ClassSelector name={name} selectClass={props.selectClass} />
            ) : (
                <div>
                    <h2>Classes</h2>
                    classes...
                    <h2>Skills</h2>
                    skills...
                </div>
            )}
        </div>
    );
};

export default withRouter(EditStudent);

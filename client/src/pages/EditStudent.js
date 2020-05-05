import _ from "lodash";
import React from "react";
import { withRouter } from "react-router";
import { getNextClass } from "../helpers/helpers";
import { displayClassSkills } from "../helpers/uihelpers";

import ClassSelector from "../components/ClassSelector";

const EditStudent = (props) => {
    if (!props.playthrough) {
        return "loading...";
    }

    const { name } = props.match.params;

    const data = _.find(props.playthrough.students, { name });
    const { classes, skills } = data;

    // TODO: if no next class, indicate whether next class not set, or
    // if character has reached end of class path
    const nextClass = getNextClass(classes);

    return (
        <div>
            <h1>{name}</h1>
            <p>
                Next class:{" "}
                {nextClass ? `${nextClass.name} (${nextClass.type}}` : "none"}
            </p>
            <p>
                Skills needed:{" "}
                {nextClass ? displayClassSkills(nextClass.classSkills) : "n/a"}{" "}
            </p>
            {classes.length < 1 ? (
                <ClassSelector name={name} selectClass={props.selectClass} />
            ) : (
                <div>
                    <h2>Class Path</h2>
                    <ul>
                        {classes.map(({ name, type, certified }) => {
                            return (
                                <li key={name}>
                                    {name} ({type}):{" "}
                                    {certified ? "Certified" : "Not certified"}
                                </li>
                            );
                        })}
                    </ul>
                    <h2>Skills</h2>
                    skills...
                </div>
            )}
        </div>
    );
};

export default withRouter(EditStudent);

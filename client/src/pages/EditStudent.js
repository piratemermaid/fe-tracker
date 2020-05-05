import _ from "lodash";
import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
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

    const renderInfo = (type) => {
        let classesToDisplay;

        switch (type) {
            case "current":
                classesToDisplay = [nextClass];
                break;
            case "completed":
                classesToDisplay = _.filter(classes, { certified: true });
                break;
            default:
                // classesToDisplay = _.filter(classes, { certified: false });
                classesToDisplay = classes.filter((classInfo) => {
                    if (
                        !classInfo.certified &&
                        classInfo.name !== nextClass.name
                    ) {
                        return classInfo;
                    }
                });
                break;
        }

        return (
            <div>
                <h2>{type}</h2>
                {classesToDisplay.length > 0 ? (
                    classesToDisplay.map(({ name, type, classSkills }) => {
                        return (
                            <div key={name}>
                                {name} ({type}) requires{" "}
                                {displayClassSkills(classSkills)}
                            </div>
                        );
                    })
                ) : (
                    <div>none</div>
                )}
            </div>
        );
    };

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
            {renderInfo("current")}
            {renderInfo("upcoming")}
            {renderInfo("completed")}
        </div>
    );
};

export default withRouter(EditStudent);

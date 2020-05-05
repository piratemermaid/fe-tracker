import _ from "lodash";
import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import {
    getNextClass,
    studentMeetsSkillReq,
    getHighestSkillLevel
} from "../helpers/helpers";
import { displayClassSkills } from "../helpers/uihelpers";

import ClassSelector from "../components/ClassSelector";

// TODO: display checkmarks if student has reached skill level
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
                    classesToDisplay.map(({ name, classSkills, certified }) => {
                        return (
                            <div key={name}>
                                <div>
                                    <h3>Class Goal</h3>
                                    <p
                                        onClick={() =>
                                            props.selectClass({
                                                studentName:
                                                    props.match.params.name,
                                                className: name
                                            })
                                        }
                                    >
                                        [{certified ? "X" : " "}] {name}
                                    </p>
                                </div>
                                <div>
                                    <h3>Skill Goals</h3>
                                    {classSkills.map((skill) => {
                                        const studentSkillLevel = getHighestSkillLevel(
                                            skills,
                                            skill.name
                                        );
                                        return (
                                            <p
                                                onClick={() =>
                                                    props.selectSkill({
                                                        studentName:
                                                            props.match.params
                                                                .name,
                                                        skillName: skill.name,
                                                        level: skill.level
                                                    })
                                                }
                                                key={`${skill.name} ${skill.level}`}
                                            >
                                                [
                                                {studentMeetsSkillReq(
                                                    skill.name,
                                                    studentSkillLevel,
                                                    skill.level
                                                )
                                                    ? "X"
                                                    : " "}
                                                ] {skill.name} {skill.level}
                                            </p>
                                        );
                                    })}
                                </div>
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

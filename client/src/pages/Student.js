import _ from "lodash";
import React from "react";
import { withRouter } from "react-router";
import {
    getNextClass,
    studentMeetsSkillReq,
    getHighestSkillLevel
} from "../helpers/helpers";
import { displayClassSkills } from "../helpers/uihelpers";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";

const Student = (props) => {
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
            case "Current":
                if (nextClass) {
                    classesToDisplay = [nextClass];
                } else {
                    return null;
                }
                break;
            case "Completed":
                classesToDisplay = _.filter(classes, { certified: true });
                break;
            default:
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
                            <Paper
                                className="goal-row"
                                elevation={1}
                                key={name}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
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
                                    </Grid>
                                    <Grid item xs={6}>
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
                                                                props.match
                                                                    .params
                                                                    .name,
                                                            skillName:
                                                                skill.name,
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
                                    </Grid>
                                </Grid>
                            </Paper>
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
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <div className="roster-img"></div>
                </Grid>
                <Grid item xs={9} className="roster-row-student">
                    <p className="roster-name">
                        {name}{" "}
                        <EditIcon
                            fontSize="small"
                            onClick={() =>
                                props.history.push(`/select_classes/${name}`)
                            }
                        />
                    </p>
                    <p>
                        Next class:{" "}
                        {nextClass
                            ? `${nextClass.name} (${nextClass.type}}`
                            : "none"}
                    </p>
                    <p>
                        Skills needed:{" "}
                        {nextClass
                            ? displayClassSkills(nextClass.classSkills)
                            : "n/a"}{" "}
                    </p>
                </Grid>
            </Grid>
            {renderInfo("Current")}
            {renderInfo("Upcoming")}
            {renderInfo("Completed")}
        </div>
    );
};

export default withRouter(Student);

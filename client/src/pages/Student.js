import _ from "lodash";
import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import {
    getNextClass,
    studentMeetsSkillReq,
    getHighestSkillLevel
} from "../helpers/helpers";
import { displayClassSkills } from "../helpers/uihelpers";

import StudentImg from "../components/StudentImg";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

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
    const currentClasses = _.compact([nextClass]);
    const completedClasses = _.compact(_.filter(classes, { certified: true }));
    const upcomingClasses = _.compact(
        classes.filter((classInfo) => {
            if (!classInfo.certified && classInfo.name !== nextClass.name) {
                return classInfo;
            }
        })
    );

    const removeStudent = (name) => {
        axios({
            method: "post",
            url: "/api/user/remove_student",
            params: { name }
        }).then((res) => {
            if (res.data === "success") {
                props.removeStudent(name);
                props.history.push("/");
            }
        });
    };

    const renderSection = (type, classesToDisplay) => {
        if (classesToDisplay.length < 1) {
            return (
                <div>
                    <h2>{type}</h2>
                    None
                    {type === "current" ? (
                        <span>
                            {" "}
                            -{" "}
                            <Link to={`/select_classes/${name}`}>Set now</Link>
                        </span>
                    ) : null}
                </div>
            );
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

    // TODO: get student gender and house for image
    return (
        <div className="padding">
            <Link to="/">
                <KeyboardBackspaceIcon />
            </Link>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <StudentImg
                        name={name}
                        byleth_gender={"F"}
                        house={"Black Eagles"}
                    />
                </Grid>
                <Grid item xs={9} className="roster-row-student">
                    <p className="roster-name">
                        {name}{" "}
                        <Link to={`/select_classes/${name}`}>
                            <EditIcon fontSize="small" />
                        </Link>
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
            {renderSection("current", currentClasses)}
            {upcomingClasses.length > 0
                ? renderSection("upcoming", upcomingClasses)
                : null}
            {renderSection("completed", completedClasses)}
            <div
                className="footer center"
                style={{ marginTop: "20px" }}
                onClick={() => removeStudent(name)}
            >
                <HighlightOffIcon
                    style={{ position: "relative", top: "7px" }}
                />
                <span> Remove from Roster</span>
            </div>
        </div>
    );
};

export default withRouter(Student);

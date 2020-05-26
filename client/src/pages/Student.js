import _ from "lodash";
import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import {
    getNextClass,
    studentMeetsSkillReq,
    studentIsReadyForCert,
    getHighestSkillLevel
} from "../helpers/helpers";
import { displayClassSkills, houseRGB } from "../helpers/uihelpers";

import Loading from "../components/Loading";
import StudentImg from "../components/StudentImg";
import BackButton from "../components/BackButton";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ErrorIcon from "@material-ui/icons/Error";

const Student = (props) => {
    if (!props.playthrough) {
        return <Loading />;
    }

    const { name } = props.match.params;

    const userStudent = _.find(props.playthrough.students, { name });
    const { classes, skills } = userStudent;
    const appStudent = _.find(props.appStudents, { name });

    // TODO: hovering styles
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

    const handleClassCheck = (e, name) => {
        props.selectClass({
            studentName: props.match.params.name,
            className: name
        });
    };

    const handleSkillCheck = (e, skill) => {
        props.selectSkill({
            studentName: props.match.params.name,
            skillName: skill.name,
            level: skill.level
        });
    };

    const renderSection = (type, classesToDisplay) => {
        if (classesToDisplay.length < 1) {
            return (
                <div>
                    <h3>{type}</h3>
                    <Paper className="goal-row" elevation={1} key={name}>
                        None
                        {type === "current" ? (
                            <span>
                                {" "}
                                -{" "}
                                <Link to={`/select_classes/${name}`}>
                                    Set now
                                </Link>
                            </span>
                        ) : null}
                    </Paper>
                </div>
            );
        }

        return (
            <div>
                <h3>{type}</h3>
                {classesToDisplay.length > 0 ? (
                    classesToDisplay.map(({ name, classSkills, certified }) => {
                        let readyForCert = false;
                        if (!certified && classSkills.length > 0) {
                            readyForCert = studentIsReadyForCert({
                                skills,
                                classSkills
                            });
                        }
                        return (
                            <Paper
                                className="goal-row"
                                elevation={1}
                                key={name}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <h4>Class</h4>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={certified}
                                                    onChange={(e) =>
                                                        handleClassCheck(
                                                            e,
                                                            name
                                                        )
                                                    }
                                                    style={{
                                                        color: houseRGB(
                                                            props.playthrough
                                                                .house
                                                        )
                                                    }}
                                                />
                                            }
                                            label={name}
                                        />
                                        {readyForCert ? (
                                            <ErrorIcon
                                                style={{
                                                    color: houseRGB(
                                                        props.playthrough.house
                                                    )
                                                }}
                                            ></ErrorIcon>
                                        ) : null}
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h4>Skills Required</h4>
                                        {classSkills.length > 0
                                            ? classSkills.map((skill) => {
                                                  const studentSkillLevel = getHighestSkillLevel(
                                                      skills,
                                                      skill.name
                                                  );

                                                  return (
                                                      <FormControlLabel
                                                          control={
                                                              <Checkbox
                                                                  checked={studentMeetsSkillReq(
                                                                      {
                                                                          studentSkillLevel,
                                                                          reqLevel:
                                                                              skill.level
                                                                      }
                                                                  )}
                                                                  onChange={(
                                                                      e
                                                                  ) =>
                                                                      handleSkillCheck(
                                                                          e,
                                                                          skill
                                                                      )
                                                                  }
                                                                  style={{
                                                                      color: houseRGB(
                                                                          props
                                                                              .playthrough
                                                                              .house
                                                                      )
                                                                  }}
                                                              />
                                                          }
                                                          label={`${skill.name} ${skill.level}`}
                                                      />
                                                  );
                                              })
                                            : "None"}
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
        <div
            id="student-overview"
            style={{ width: "100%" }}
            className="padding"
        >
            <BackButton />
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <StudentImg
                        name={name}
                        byleth_gender={props.playthrough.byleth_gender}
                        house={
                            name !== "Byleth"
                                ? appStudent.house
                                : props.playthrough.house
                        }
                    />
                </Grid>
                <Grid item xs={9} className="roster-row-student">
                    <p className="roster-name">
                        {name}{" "}
                        <Link to={`/select_classes/${name}`}>
                            <EditIcon
                                fontSize="small"
                                style={{
                                    color: houseRGB(props.playthrough.house)
                                }}
                            />
                        </Link>
                    </p>
                    <p className="roster-desc">
                        Next class:{" "}
                        {nextClass
                            ? `${nextClass.name} (${nextClass.type}}`
                            : "none"}
                    </p>
                    <p className="roster-desc">
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
                className="footer center hover"
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

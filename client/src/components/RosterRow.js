import _ from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import {
    getNextClass,
    studentIsReadyForCert,
    studentMeetsSkillReq,
    getNextSkillGoals
} from "../helpers/helpers";
import { displayClassSkills, houseRGB } from "../helpers/uihelpers";

import StudentImg from "../components/StudentImg";
import Grid from "@material-ui/core/Grid";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import ErrorIcon from "@material-ui/icons/Error";

const RosterRow = (props) => {
    const { name, classes, skills } = props.student;
    const { appStudents, byleth_gender, house } = props;
    const nextClass = getNextClass(classes);
    const nextSkillGoals = getNextSkillGoals({ classes, skills });

    // only show lowest level uncertified class
    const renderClass = (nextClass, readyForCert) => {
        if (nextClass) {
            const { name, type } = nextClass;
            if (readyForCert) {
                return (
                    <span>
                        Ready for cert: {name} ({type})
                    </span>
                );
            } else {
                return (
                    <span>
                        Next class: {name} ({type})
                    </span>
                );
            }
        } else {
            return <span className="italic">Completed all set classes</span>;
        }
    };
    const studentInfo = _.find(appStudents, { name });

    let readyForCert = false;
    if (nextClass) {
        readyForCert = studentIsReadyForCert({
            skills,
            classSkills: nextClass.classSkills
        });
    }

    return (
        <div key={name} className="roster-row">
            <Link to={`/student/${name}`} className="no-link-style">
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <StudentImg
                            name={name}
                            byleth_gender={byleth_gender}
                            house={
                                name !== "Byleth" ? studentInfo.house : house
                            }
                        />
                    </Grid>
                    <Grid item xs={8} className="roster-row-student">
                        <p className="roster-name">
                            {name}{" "}
                            {readyForCert ? (
                                <span>
                                    <ErrorIcon
                                        className="ready-for-cert"
                                        style={{
                                            color: houseRGB(house)
                                        }}
                                    ></ErrorIcon>
                                </span>
                            ) : null}
                        </p>
                        <p>
                            {classes.length > 0 ? (
                                <span>
                                    {renderClass(nextClass, readyForCert)}
                                </span>
                            ) : (
                                <span className="italic">No classes set</span>
                            )}
                        </p>
                        <p>
                            {nextSkillGoals && nextSkillGoals.length > 0 ? (
                                <span>
                                    Next goals:{" "}
                                    {nextSkillGoals
                                        ? displayClassSkills(
                                              _.compact(
                                                  nextSkillGoals.map(
                                                      (classSkill) => {
                                                          const studentSkill = _.find(
                                                              skills,
                                                              {
                                                                  name:
                                                                      classSkill.name
                                                              }
                                                          );
                                                          if (
                                                              !studentSkill ||
                                                              !studentMeetsSkillReq(
                                                                  {
                                                                      studentSkillLevel:
                                                                          studentSkill.level,
                                                                      reqLevel:
                                                                          classSkill.level
                                                                  }
                                                              )
                                                          ) {
                                                              return classSkill;
                                                          }
                                                      }
                                                  )
                                              )
                                          )
                                        : "none"}
                                </span>
                            ) : null}
                        </p>
                    </Grid>
                    <Grid item xs={1}>
                        <ArrowRightAltIcon className="right-arrow" />
                    </Grid>
                </Grid>
            </Link>
        </div>
    );
};

export default RosterRow;

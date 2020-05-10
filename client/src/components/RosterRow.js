import _ from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import { getNextClass } from "../helpers/helpers";
import { displayClassSkills, houseRGB } from "../helpers/uihelpers";

import StudentImg from "../components/StudentImg";
import Grid from "@material-ui/core/Grid";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import ErrorIcon from "@material-ui/icons/Error";

const RosterRow = (props) => {
    const { name, classes, skills } = props.student;
    const { appStudents, byleth_gender, house } = props;
    const nextClass = getNextClass(classes);
    let nextSkillGoals = getNextSkillGoals({ classes, certified: false });

    // only show lowest level uncertified class
    const renderClass = (nextClass) => {
        const { name, type } = nextClass;
        return (
            <span>
                {name} ({type})
            </span>
        );
    };
    const studentInfo = _.find(appStudents, { name });

    return (
        <div key={name} className="roster-row">
            <Link to={`/student/${name}`} className="no-link-style">
                <Grid container spacing={3} alignItems="center">
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
                                    {" "}
                                    <ErrorIcon
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
                                    {!readyForCert
                                        ? "Next class"
                                        : "Ready for cert"}
                                    : {renderClass(nextClass)}
                                </span>
                            ) : (
                                "No classes set"
                            )}
                        </p>
                        <p>
                            {nextClass ? (
                                <span>
                                    Next skills needed:{" "}
                                    {displayClassSkills(nextClass.classSkills)}
                                </span>
                            ) : null}
                        </p>
                    </Grid>
                    <Grid item xs={1}>
                        <ArrowRightAltIcon />
                    </Grid>
                </Grid>
            </Link>
        </div>
    );
};

export default RosterRow;

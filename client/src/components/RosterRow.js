import React from "react";
import { Link } from "react-router-dom";
import { getNextClass } from "../helpers/helpers";
import { displayClassSkills } from "../helpers/uihelpers";

import StudentImg from "../components/StudentImg";
import Grid from "@material-ui/core/Grid";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const RosterRow = (props) => {
    const { name, classes, skills } = props.student;
    const nextClass = getNextClass(classes);

    // only show lowest level uncertified class
    const renderClass = (nextClass) => {
        const { name, type } = nextClass;
        return (
            <span>
                {name} ({type})
            </span>
        );
    };

    // TODO: get student gender and house for image
    return (
        <div key={name} className="roster-row">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <StudentImg
                        name={name}
                        byleth_gender={"F"}
                        house={"Black Eagles"}
                    />
                </Grid>
                <Grid item xs={7} className="roster-row-student">
                    <p className="roster-name">{name}</p>
                    <p>
                        {classes.length > 0 ? (
                            <span>Next class: {renderClass(nextClass)}</span>
                        ) : (
                            "No classes set"
                        )}
                    </p>
                    <p>
                        {nextClass ? (
                            <span>
                                Skills needed:{" "}
                                {displayClassSkills(nextClass.classSkills)}
                            </span>
                        ) : null}
                    </p>
                </Grid>
                <Grid item xs={2}>
                    <Link to={`/student/${name}`}>
                        <ArrowRightAltIcon />
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
};

export default RosterRow;

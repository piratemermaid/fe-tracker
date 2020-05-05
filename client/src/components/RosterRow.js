import React from "react";
import { Link } from "react-router-dom";
import { getNextClass } from "../helpers/helpers";
import { displayClassSkills } from "../helpers/uihelpers";

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

    return (
        <div key={name} className="roster-row">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <div className="roster-img"></div>
                </Grid>
                <Grid item xs={7}>
                    {name}
                    <br />
                    {classes.length > 0 ? (
                        <span>Next class: {renderClass(nextClass)}</span>
                    ) : (
                        "No classes set"
                    )}
                    <br />
                    {nextClass ? (
                        <span>
                            Skills needed:{" "}
                            {displayClassSkills(nextClass.classSkills)}
                        </span>
                    ) : null}
                    <br />
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

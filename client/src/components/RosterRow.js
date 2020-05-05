import React from "react";
import { Link } from "react-router-dom";
import { getNextClass } from "../helpers/helpers";
import { displayClassSkills } from "../helpers/uihelpers";

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
            <div className="roster-img"></div>
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
                    Skills needed: {displayClassSkills(nextClass.classSkills)}
                </span>
            ) : null}
            <br />
            <Link to={`/student/${name}`}>Update</Link>
        </div>
    );
};

export default RosterRow;

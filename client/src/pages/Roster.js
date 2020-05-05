import React from "react";
import { Link } from "react-router-dom";
import { getNextClass } from "../helpers/helpers";
import { displayClassSkills } from "../helpers/uihelpers";

const Roster = (props) => {
    if (!props.playthrough) {
        return "loading...";
    }

    // only show lowest level uncertified class
    const renderClass = (nextClass) => {
        const { name, type } = nextClass;
        return (
            <span>
                {name} ({type})
            </span>
        );
    };

    const { house, byleth_gender, students } = props.playthrough;
    return (
        <div>
            <h1>{house} Roster</h1>
            <ul>
                {students.map(({ name, classes, skills }) => {
                    const nextClass = getNextClass(classes);
                    return (
                        <li key={name} className="student-row">
                            {name}
                            <br />
                            {classes.length > 0 ? (
                                <span>
                                    Next class: {renderClass(nextClass)}
                                </span>
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
                            <Link to={`/student/${name}`}>Update</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Roster;

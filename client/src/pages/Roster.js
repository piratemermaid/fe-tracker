import React from "react";
import { Link } from "react-router-dom";

const Roster = (props) => {
    if (!props.playthrough) {
        return "loading...";
    }

    // only show lowest level uncertified class
    const renderClass = (classes) => {
        for (let sClass of classes) {
            const { name, type, certified } = sClass;
            if (!certified) {
                return (
                    <span>
                        {name} ({type})
                    </span>
                );
            }
        }
    };

    const { house, byleth_gender, students } = props.playthrough;
    return (
        <div>
            <h1>{house} Roster</h1>
            <ul>
                {students.map(({ name, classes, skills }) => {
                    return (
                        <li key={name} className="student-row">
                            {name}
                            <br />
                            {classes.length > 0 ? (
                                <span>Classes: {renderClass(classes)}</span>
                            ) : (
                                "No classes set"
                            )}
                            <br />
                            {skills.length > 0 ? (
                                <span>Skills: {skills.split(", ")}</span>
                            ) : (
                                "No skills set"
                            )}
                            <br />
                            <Link to={`/edit_student/${name}`}>Update</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Roster;

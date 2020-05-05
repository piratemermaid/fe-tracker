import React from "react";

const Roster = (props) => {
    if (!props.playthrough) {
        return "loading...";
    }

    console.log(props.playthrough);
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
                                <span>Classes: {classes.split(", ")}</span>
                            ) : (
                                "No classes set"
                            )}
                            <br />
                            {skills.length > 0 ? (
                                <span>Skills: {skills.split(", ")}</span>
                            ) : (
                                "No skills set"
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Roster;

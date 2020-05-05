import React from "react";

import RosterRow from "../components/RosterRow";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

// TODO: sort roster by your house -> next 2 houses -> faculty -> other
const Roster = (props) => {
    if (!props.playthrough) {
        return "loading...";
    }

    const { house, byleth_gender, students } = props.playthrough;
    return (
        <div>
            <h1>
                {house} Roster
                <span style={{ float: "right" }}>
                    <AddCircleOutlineIcon
                        onClick={() => props.history.push("/add_student")}
                    />
                </span>
            </h1>
            <ul>
                {students.map((student) => {
                    return (
                        <RosterRow
                            key={student.name}
                            student={student}
                            byleth_gender={byleth_gender}
                            house={house}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default Roster;

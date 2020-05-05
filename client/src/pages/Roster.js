import React from "react";

import RosterRow from "../components/RosterRow";

const Roster = (props) => {
    if (!props.playthrough) {
        return "loading...";
    }

    const { house, byleth_gender, students } = props.playthrough;
    return (
        <div>
            <h1>{house} Roster</h1>
            <ul>
                {students.map((student) => {
                    return (
                        <RosterRow
                            student={student}
                            byleth_gender={byleth_gender}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default Roster;

import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import RosterRow from "../components/RosterRow";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Button from "@material-ui/core/Button";

// TODO: sort roster by your house -> next 2 houses -> faculty -> other
const Roster = (props) => {
    if (!props.playthrough) {
        return "loading...";
    }

    const { house, byleth_gender, students } = props.playthrough;
    return (
        <div>
            <div className="padding">
                <h1>
                    {house} Roster
                    <span style={{ float: "right" }}>
                        <AddCircleOutlineIcon
                            onClick={() => props.history.push("/add_student")}
                        />
                    </span>
                </h1>
            </div>
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
            <div className="center footer">
                <Button
                    className="button"
                    style={{ width: "90%" }}
                    variant="contained"
                    color="primary"
                    onClick={() => props.history.push("/new_playthrough")}
                >
                    Start New Playthrough
                </Button>
            </div>
        </div>
    );
};

export default withRouter(Roster);

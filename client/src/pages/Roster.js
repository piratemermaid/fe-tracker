import React from "react";
import { Link } from "react-router-dom";

import RosterRow from "../components/RosterRow";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Button from "@material-ui/core/Button";

// TODO: sort roster by your house -> next 2 houses -> faculty -> other
const Roster = (props) => {
    if (!props.playthrough) {
        return (
            <div className="padding">
                <h1>No playthrough found.</h1>
                <Link to="/new_playthrough">
                    <Button
                        className="button"
                        style={{ width: "90%" }}
                        variant="contained"
                        color="primary"
                    >
                        Start New Playthrough
                    </Button>
                </Link>
            </div>
        );
    }

    const { house, byleth_gender, students } = props.playthrough;
    return (
        <div>
            <div className="padding">
                <h1>
                    {house} Roster
                    <span style={{ float: "right" }}>
                        <Link to="/add_student">
                            <AddCircleOutlineIcon />
                        </Link>
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
                <Link to="/new_playthrough">
                    <Button
                        className="button"
                        style={{ width: "90%" }}
                        variant="contained"
                        color="primary"
                    >
                        Start New Playthrough
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Roster;

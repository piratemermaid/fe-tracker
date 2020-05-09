import _ from "lodash";
import React from "react";
import { Link } from "react-router-dom";

import RosterRow from "../components/RosterRow";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Button from "@material-ui/core/Button";

// TODO: show alert icon if ready for certification
const Roster = (props) => {
    if (!props.playthrough || !props.studentOrder) {
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

    const { studentOrder } = props;
    const { house, byleth_gender, students } = props.playthrough;

    const studentsInOrder = students.sort((a, b) => {
        return (
            _.findIndex(studentOrder, { name: a.name }) -
            _.findIndex(studentOrder, { name: b.name })
        );
    });

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
                {studentsInOrder.map((student) => {
                    return (
                        <RosterRow
                            key={student.name}
                            student={student}
                            byleth_gender={byleth_gender}
                            house={house}
                            appStudents={props.appStudents}
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

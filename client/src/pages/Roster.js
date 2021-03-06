import _ from "lodash";
import React from "react";
import { Link } from "react-router-dom";

import RosterRow from "../components/RosterRow";
import RosterFooter from "../components/RosterFooter";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Button from "@material-ui/core/Button";
import Loading from "../components/Loading";

// TODO: show alert icon if ready for certification
const Roster = (props) => {
    if (props.isLoadingUserData) {
        return <Loading />;
    }

    if (!props.playthrough) {
        return (
            <div className="padding">
                <h2>No playthrough found.</h2>
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
                <h2>
                    {house} Roster
                    <span style={{ float: "right" }}>
                        <Link to="/add_student">
                            <AddCircleOutlineIcon />
                        </Link>
                    </span>
                </h2>
            </div>
            <ul>
                {students.map((student) => {
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
            <RosterFooter logOut={props.logOut} />
        </div>
    );
};

export default Roster;

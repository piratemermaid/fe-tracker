import _ from "lodash";
import React from "react";
import { Link } from "react-router-dom";

import StudentImg from "../components/StudentImg";
import Grid from "@material-ui/core/Grid";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const Gifts = (props) => {
    const { playthrough, appStudents, studentOrder } = props;
    const userStudents = playthrough.students.sort((a, b) => {
        return (
            _.findIndex(studentOrder, { name: a.name }) -
            _.findIndex(studentOrder, { name: b.name })
        );
    });

    return (
        <div>
            <div className="padding">
                <Link to="/">
                    <KeyboardBackspaceIcon />
                </Link>
                <h1>Best Gifts</h1>
            </div>
            {userStudents.map(({ name }) => {
                if (name !== "Byleth") {
                    const appStudent = _.find(appStudents, { name });
                    const gifts = appStudent.gifts.map(({ name }) => {
                        return name;
                    });

                    return (
                        <div key={name} className="roster-row">
                            <Grid container spacing={3} alignItems="center">
                                <Grid item xs={3}>
                                    <StudentImg
                                        name={name}
                                        byleth_gender={
                                            props.playthrough.byleth_gender
                                        }
                                        house={
                                            name !== "Byleth"
                                                ? appStudent.house
                                                : props.playthrough.house
                                        }
                                    />
                                </Grid>
                                <Grid item xs={9}>
                                    {gifts.join(", ")}
                                </Grid>
                            </Grid>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default Gifts;

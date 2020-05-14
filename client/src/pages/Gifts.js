import _ from "lodash";
import React from "react";

import Loading from "../components/Loading";
import StudentImg from "../components/StudentImg";
import BackButton from "../components/BackButton";
import Grid from "@material-ui/core/Grid";

const Gifts = (props) => {
    const { playthrough, appStudents } = props;

    if (!playthrough || !appStudents) {
        return <Loading />;
    }

    const userStudents = playthrough.students;

    return (
        <div>
            <div className="padding">
                <BackButton />
                <h2>Best Gifts</h2>
            </div>
            {userStudents.map(({ name }) => {
                if (name !== "Byleth") {
                    const appStudent = _.find(appStudents, { name });
                    const { gifts } = appStudent;

                    return (
                        <div key={name} className="roster-row">
                            <Grid container spacing={3} alignItems="top">
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
                                    <p
                                        className="roster-name"
                                        style={{ marginTop: 0 }}
                                    >
                                        {name}
                                    </p>
                                    <ul className="styled-list">
                                        {gifts.map(({ name }) => {
                                            return <li key={name}>{name}</li>;
                                        })}
                                    </ul>
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

import React from "react";

import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "100px"
    }
}));

const Loading = () => {
    const classes = useStyles();

    return (
        <Grid container justify="center">
            <Grid item>
                <div className={classes.root}>
                    <CircularProgress size={60} thickness={4} />
                </div>
            </Grid>
        </Grid>
    );
};

export default Loading;

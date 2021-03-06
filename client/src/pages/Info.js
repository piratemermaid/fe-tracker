import React from "react";
import { withRouter } from "react-router";
import BackButton from "../components/BackButton";
import Grid from "@material-ui/core/Grid";
import { stripSpaces } from "../helpers/helpers";

const Info = (props) => {
    const CustomLink = (text, url) => {
        return (
            <Grid
                item
                xs={6}
                className="info-link"
                onClick={() => props.history.push(url)}
                id={stripSpaces(text)}
            >
                <h4>{text}</h4>
            </Grid>
        );
    };

    return (
        <div id="info-links">
            <div className="padding">
                <BackButton />
                <h2>Info</h2>
            </div>
            <Grid className="padding " container>
                {CustomLink("Gifts", "/gifts")}
                {CustomLink("Lost Items", "/lost_items")}
                {CustomLink("Faculty Training", "/faculty_training")}
                {CustomLink("Tea Party Guide", "/tea_party")}
            </Grid>
        </div>
    );
};

export default withRouter(Info);

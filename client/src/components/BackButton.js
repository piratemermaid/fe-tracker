import React from "react";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const BackButton = (props) => {
    return (
        <div id="back-button">
            <Link to={props.url ? props.url : "/"}>
                <KeyboardBackspaceIcon />
            </Link>
        </div>
    );
};

export default BackButton;

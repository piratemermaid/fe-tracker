import React from "react";
import BackButton from "../components/BackButton";

const TeaParty = (props) => {
    return (
        <div className="padding">
            <BackButton url="/info" />
            <h2>TODO: Tea Party Guide</h2>
            This page will have tea party guides for each character
        </div>
    );
};

export default TeaParty;

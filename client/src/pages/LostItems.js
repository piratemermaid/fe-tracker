import React from "react";
import BackButton from "../components/BackButton";

const LostItems = (props) => {
    return (
        <div className="padding">
            <BackButton url="/info" />
            <h2>TODO: Lost Items</h2>
            This page will show where to find lost items for each month, and
            users will be able to check off which ones they have found and
            delivered
        </div>
    );
};

export default LostItems;

import React from "react";

const Roster = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{props.playthrough.house} Roster</h1>
        </div>
    );
};

export default Roster;

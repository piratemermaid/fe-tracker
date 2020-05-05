import React from "react";

const Roster = (props) => {
    if (!props.playthrough) {
        return "loading...";
    }

    console.log(props.playthrough);
    const { house, byleth_gender, students } = props.playthrough;
    return (
        <div>
            <h1>{house} Roster</h1>
            <ul>
                {students.map(({ name }) => {
                    return <li key={name}>{name}</li>;
                })}
            </ul>
        </div>
    );
};

export default Roster;

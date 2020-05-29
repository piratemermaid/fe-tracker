import React from "react";

import BackButton from "../components/BackButton";

const DevNotes = () => {
    return (
        <div className="padding">
            <BackButton />
            <h2>Dev Notes</h2>
            <h3>Todos</h3>
            <ul className="styled-list">
                {todos.map(({ desc }) => {
                    return <li>{desc}</li>;
                })}
            </ul>
            <h3>Known bugs</h3>
            <ul className="styled-list">
                {bugs.map(({ desc }) => {
                    return <li>{desc}</li>;
                })}
            </ul>
            <h3>Feature ideas</h3>
            <ul className="styled-list">
                {featureIdeas.map(({ desc }) => {
                    return <li>{desc}</li>;
                })}
            </ul>
        </div>
    );
};

const todos = [
    { desc: "On class path selection page, show what % other users chose" },
    {
        desc:
            "Ability to sort roster page by class level (e.g. show those who haven't certified for Beginner, then Intermediate, then Advanced)"
    },
    { desc: "Add gifts for students not in house" },
    { desc: "Show tooltips description for class abilities" },
    {
        desc:
            "Reorder students by order in game when instructing (GD and BE done, need BL order)"
    }
];

const bugs = [{ desc: "Some glitchy loading" }];

const featureIdeas = [
    { desc: "Lost item guide" },
    { desc: "Faculty training guide" },
    { desc: "Show whether to critique/console for failure" },
    { desc: "Select non-class skill goals post master class (or along path)" },
    { desc: "Track support levels" },
    { desc: "Show group task options" },
    { desc: "Keep track of class mastery" },
    { desc: "Tea Party guides" }
];

export default DevNotes;

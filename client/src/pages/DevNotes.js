import React from "react";

import BackButton from "../components/BackButton";

const DevNotes = () => {
    return (
        <div>
            <BackButton />
            <h1>Dev Notes</h1>
            <h2>Todos</h2>
            <ul className="styled-list">
                {todos.map(({ desc }) => {
                    return <li>{desc}</li>;
                })}
            </ul>
            <h2>Known bugs</h2>
            <ul className="styled-list">
                {bugs.map(({ desc }) => {
                    return <li>{desc}</li>;
                })}
            </ul>
            <h2>Feature ideas</h2>
            <ul className="styled-list">
                {featureIdeas.map(({ desc }) => {
                    return <li>{desc}</li>;
                })}
            </ul>
        </div>
    );
};

const todos = [
    {
        desc:
            "Add character/class gender and prevent wrong gender from using class e.g. Gremory cannot be male"
    },
    { desc: "On class path selection page, show what % other users chose" },
    {
        desc:
            "Ability to sort roster page by class level (e.g. show those who haven't certified for Beginner, then Intermediate, then Advanced)"
    },
    { desc: "Reorder students by order in game when instructing" }
];

const bugs = [
    {
        desc:
            "Stuck on loading sometimes when starting new session while unauthenticated"
    }
];

const featureIdeas = [
    { desc: "Show whether to critique/console for failure" },
    { desc: "Select non-class skill goals post master class (or along path)" },
    { desc: "Lost item guide" },
    { desc: "Track support levels" },
    { desc: "Show group task options" },
    { desc: "Keep track of class mastery" },
    { desc: "Tea Party guides" }
];

export default DevNotes;

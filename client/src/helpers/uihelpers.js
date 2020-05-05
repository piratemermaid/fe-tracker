import React from "react";

// TODO: don't display skills already acquired
// (make that an option?)
export function displayClassSkills(skills) {
    let ui = [];
    for (let i in skills) {
        const { name, level } = skills[i];
        ui.push(
            <span key={name}>
                {name} {level}
            </span>
        );
        if (i < skills.length - 1) {
            ui.push(", ");
        }
    }
    return ui;
}

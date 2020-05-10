import React from "react";
import { stripSpaces } from "./helpers";

export function displayClassSkills(skills) {
    return skills.map(({ name, level }) => {
        return (
            <span className="skill-icon" key={name}>
                <img
                    src={`/img/skills/${stripSpaces(name)}.png`}
                    alt={name}
                    title={name}
                />
                {level}
            </span>
        );
    });
}

export function displaySkillsWithoutLevel(skills) {
    let ui = [];
    for (let i in skills) {
        const { name } = skills[i];
        ui.push(<span key={name}>{name}</span>);
        if (i < skills.length - 1) {
            ui.push(", ");
        }
    }
    return ui;
}

export function houseRGB(house) {
    switch (house) {
        case "Black Eagles":
            return "rgb(206, 54, 87)";
        case "Blue Lions":
            return "rgb(77, 95, 169)";
        default:
            return "rgb(223, 192, 74)";
    }
}

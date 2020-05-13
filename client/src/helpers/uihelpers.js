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
    if (skills.length > 0) {
        return skills.map(({ name }) => {
            return (
                <img
                    src={`/img/skills/${stripSpaces(name)}.png`}
                    className="skill-icon"
                    alt={name}
                    title={name}
                />
            );
        });
    }
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

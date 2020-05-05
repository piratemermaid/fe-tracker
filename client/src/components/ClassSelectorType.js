import React from "react";

const ClassSelectorType = (props) => {
    return (
        <div>
            <h2>{props.type}</h2>
            <ul>
                {props.classes.map(
                    ({
                        name,
                        skills,
                        abilities,
                        mastery_ability,
                        mastery_combat_art
                    }) => {
                        return (
                            <li
                                key={name}
                                style={{ marginBottom: "16px" }}
                                onClick={() =>
                                    props.selectClass({
                                        studentName: props.student,
                                        className: name
                                    })
                                }
                            >
                                {name}
                                <br />
                                Skills required:{" "}
                                {skills.map(({ name, level }) => {
                                    return `${name} ${level}  `;
                                })}
                                <br />
                                Class abilities: {abilities || "none"}
                                <br />
                                Class mastery:{" "}
                                {mastery_ability ? (
                                    <span>Ability {mastery_ability}</span>
                                ) : null}
                                {mastery_ability && mastery_combat_art
                                    ? ", "
                                    : null}
                                {mastery_combat_art ? (
                                    <span>Combat Art {mastery_combat_art}</span>
                                ) : null}
                            </li>
                        );
                    }
                )}
            </ul>
        </div>
    );
};

export default ClassSelectorType;

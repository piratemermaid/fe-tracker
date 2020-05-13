import _ from "lodash";
import React from "react";
import { displaySkillsWithoutLevel } from "../helpers/uihelpers";

const SkillsOverview = (props) => {
    const { skills } = props;

    const types = ["proficient", "budding", "weakness"];

    const renderSkillType = (type, matches) => {
        if (type === "proficient") {
            if (matches.length > 0) {
                return (
                    <div>
                        <span>
                            <img
                                src="/img/skills/proficient.png"
                                className="skill-icon"
                                style={{ marginRight: "12px" }}
                                alt="Proficient"
                                title="Proficient"
                            />
                            {displaySkillsWithoutLevel(matches)}
                        </span>
                    </div>
                );
            } else {
                return "No proficient skills";
            }
        } else if (type === "budding") {
            if (matches.length > 0) {
                return (
                    <div>
                        <img
                            src="/img/skills/budding.png"
                            className="skill-icon"
                            style={{ marginRight: "12px" }}
                            alt="Budding"
                            title="Budding"
                        />
                        {displaySkillsWithoutLevel(matches)}
                    </div>
                );
            }
        } else {
            if (matches.length > 0) {
                return (
                    <div>
                        <img
                            src="/img/skills/weakness.png"
                            className="skill-icon"
                            style={{ marginRight: "12px" }}
                            alt="Weakness"
                            title="Weakness"
                        />
                        {displaySkillsWithoutLevel(matches)}
                    </div>
                );
            }
        }
    };

    return (
        <div>
            {types.map((type) => {
                const matches = _.filter(skills, { [type]: true });
                if (matches.length > 0) {
                    return <div>{renderSkillType(type, matches)}</div>;
                }
            })}
        </div>
    );
};

export default SkillsOverview;

import _ from "lodash";
import React from "react";
import { displaySkillsWithoutLevel } from "../helpers/uihelpers";

const SkillsOverview = (props) => {
    const { skills } = props;

    const types = ["proficient", "budding", "weakness"];

    const getText = (type, matches) => {
        if (type === "proficient") {
            if (matches) {
                return "Proficient in: ";
            } else {
                return "No proficient skills";
            }
        } else if (type === "budding") {
            if (matches) {
                return "Budding talent: ";
            }
        } else {
            if (matches) {
                return "Weaknesses: ";
            }
        }
    };

    return (
        <div>
            {types.map((type) => {
                const matches = _.filter(skills, { [type]: true });
                if (matches.length > 0) {
                    return (
                        <div>
                            {getText(type, true)}
                            {displaySkillsWithoutLevel(matches)}
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default SkillsOverview;

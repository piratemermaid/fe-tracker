import React from "react";
import { displayClassSkills } from "../helpers/uihelpers";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ClassSelectorType = (props) => {
    return (
        <div>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    {props.type}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
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
                                            props.selectClassGoal({
                                                studentName: props.student,
                                                className: name
                                            })
                                        }
                                    >
                                        {name}
                                        <br />
                                        Skills required:{" "}
                                        {displayClassSkills(skills)}
                                        <br />
                                        Class abilities: {abilities || "none"}
                                        <br />
                                        Class mastery:{" "}
                                        {mastery_ability ? (
                                            <span>
                                                Ability {mastery_ability}
                                            </span>
                                        ) : null}
                                        {mastery_ability && mastery_combat_art
                                            ? ", "
                                            : null}
                                        {mastery_combat_art ? (
                                            <span>
                                                Combat Art {mastery_combat_art}
                                            </span>
                                        ) : null}
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
};

export default ClassSelectorType;

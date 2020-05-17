import _ from "lodash";
import React from "react";
import { displayClassSkills } from "../helpers/uihelpers";
import { stripSpaces } from "../helpers/helpers";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ClassSelectorType = (props) => {
    const { appStudentInfo, studentClasses, type, filters } = props;

    let typeIsSet = false;
    const classesSetOfType = _.compact(
        props.studentClasses.map((sClass) => {
            if (sClass.type === type) {
                return sClass.name;
            }
        })
    );
    if (classesSetOfType.length > 0) {
        typeIsSet = true;
    }

    const checkFilters = (skills) => {
        if (filters.length < 1) {
            return true;
        }
        for (let skill of skills) {
            if (filters.includes(skill.name)) {
                return true;
            }
        }
    };

    return (
        <div style={{ marginBottom: "4px" }}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={
                        typeIsSet ? `${stripSpaces(props.house)}-bg` : null
                    }
                >
                    {props.type}
                    {typeIsSet ? ` (${classesSetOfType.join(", ")})` : null}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <ul style={{ width: "100%" }}>
                        {props.classes.map(
                            ({
                                name,
                                skills,
                                abilities,
                                gender,
                                student,
                                mastery_ability,
                                mastery_combat_art
                            }) => {
                                let shouldDisplay = checkFilters(skills);
                                if (student) {
                                    if (student !== props.student) {
                                        shouldDisplay = false;
                                    }
                                }
                                if (gender) {
                                    if (gender !== appStudentInfo.gender) {
                                        shouldDisplay = false;
                                    }
                                }

                                if (!shouldDisplay) {
                                    return null;
                                }

                                let classIsSet = false;
                                let classIsCertified = false;

                                const studentClassInfo = _.find(
                                    studentClasses,
                                    { name }
                                );
                                if (studentClassInfo) {
                                    classIsSet = true;
                                    if (studentClassInfo.certified) {
                                        classIsCertified = true;
                                    }
                                }

                                let className = "set-class";
                                if (classIsCertified) {
                                    className += " certified";
                                } else if (classIsSet) {
                                    className += ` ${stripSpaces(
                                        props.house
                                    )}-bg`;
                                } else {
                                    className += " unset";
                                }

                                return (
                                    <li
                                        key={name}
                                        className={className}
                                        onClick={() =>
                                            props.selectClassGoal({
                                                studentName: props.student,
                                                className: name
                                            })
                                        }
                                    >
                                        <span className="class-name">
                                            {name}
                                            {classIsCertified
                                                ? " (Certified)"
                                                : null}
                                        </span>
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

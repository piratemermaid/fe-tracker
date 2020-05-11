import _ from "lodash";
import React, { Component } from "react";
import { stripSpaces } from "../helpers/helpers";

import Loading from "../components/Loading";
import ClassSelectorType from "../components/ClassSelectorType";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

// TODO: fix reloading on selection
class ClassSelector extends Component {
    constructor(props) {
        super(props);

        this.state = { classes: {} };
    }

    componentDidMount() {
        if (this.props.appData) {
            this.setState({ classes: this.props.appData.classes });
        }
    }

    render() {
        if (!this.props.playthrough) {
            return <Loading />;
        }

        const { name } = this.props.match.params;
        const studentInfo = _.find(this.props.appData.students, { name });
        const proficientSkills = studentInfo.skills.filter((skill) => {
            if (skill.proficient || skill.budding) {
                return skill;
            }
        });

        const types = [
            "Beginner",
            "Intermediate",
            "Advanced",
            "Master",
            "Unique",
            "DLC"
        ];

        const { students, house } = this.props.playthrough;

        return (
            <div className="padding">
                <KeyboardBackspaceIcon
                    onClick={() => {
                        this.props.history.push(`/student/${name}`);
                    }}
                />
                <h1>Select Classes for {name}</h1>
                <div className="skill-filters">
                    {proficientSkills.map(({ name }) => {
                        return (
                            <img
                                key={name}
                                onClick={() =>
                                    this.props.classSelectorFilterChange(name)
                                }
                                className={`skill-filter${
                                    this.props.classSelectorFilters.includes(
                                        name
                                    )
                                        ? " filter-selected"
                                        : ""
                                }`}
                                src={`/img/skills/${stripSpaces(name)}.png`}
                                alt={name}
                                title={name}
                            />
                        );
                    })}
                </div>
                {types.map((type) => {
                    const studentInfo = _.find(students, { name });
                    return (
                        <ClassSelectorType
                            type={type}
                            student={name}
                            classes={_.filter(this.state.classes, {
                                type
                            })}
                            studentClasses={studentInfo.classes}
                            house={house}
                            selectClassGoal={this.props.selectClassGoal}
                            key={type}
                            filters={this.props.classSelectorFilters}
                        />
                    );
                })}
            </div>
        );
    }
}

export default ClassSelector;

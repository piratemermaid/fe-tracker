import _ from "lodash";
import React, { Component } from "react";
import { stripSpaces } from "../helpers/helpers";

import ClassSelectorType from "../components/ClassSelectorType";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

// TODO: fix reloading on selection
class ClassSelector extends Component {
    constructor(props) {
        super(props);

        this.state = { classes: {}, filters: [] };
    }

    onFilterChange(name) {
        let { filters } = this.state;
        if (filters.includes(name)) {
            const index = _.findIndex(filters, { name });
            filters.splice(index, 1);
        } else {
            filters.push(name);
        }
        this.setState({ filters });
    }

    componentDidMount() {
        if (this.props.appData) {
            this.setState({ classes: this.props.appData.classes });
        }
    }

    render() {
        if (!this.props.playthrough) {
            return "loading...";
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
                                onClick={() => this.onFilterChange(name)}
                                className={`skill-filter${
                                    this.state.filters.includes(name)
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
                            filters={this.state.filters}
                        />
                    );
                })}
            </div>
        );
    }
}

export default ClassSelector;

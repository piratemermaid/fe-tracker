import _ from "lodash";
import React, { Component } from "react";
import axios from "axios";
import { stripSpaces } from "../helpers/helpers";

import Loading from "../components/Loading";
import ClassSelectorType from "../components/ClassSelectorType";
import BackButton from "../components/BackButton";

// TODO: fix reloading on selection
class ClassSelector extends Component {
    constructor(props) {
        super(props);

        this.state = { classes: {}, filters: [], percentages: {} };
    }

    onFilterChange(name) {
        let { filters } = this.state;
        if (filters.includes(name)) {
            const index = _.indexOf(filters, name);
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

        axios({
            method: "get",
            url: "/api/app/class_percentage",
            params: { studentName: this.props.match.params.name }
        }).then((res) => {
            this.setState({ percentages: res.data });
        });
    }

    render() {
        if (!this.props.playthrough) {
            return <Loading />;
        }

        const { name } = this.props.match.params;
        const appStudentInfo = _.find(this.props.appData.students, { name });
        const proficientSkills = appStudentInfo.skills.filter((skill) => {
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
                <BackButton url={`/student/${name}`} />
                <h2>Select Classes for {name}</h2>
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
                    const userStudentInfo = _.find(students, { name });
                    return (
                        <ClassSelectorType
                            type={type}
                            student={name}
                            classes={_.filter(this.state.classes, {
                                type
                            })}
                            studentClasses={userStudentInfo.classes}
                            house={house}
                            selectClassGoal={this.props.selectClassGoal}
                            key={type}
                            filters={this.state.filters}
                            appStudentInfo={appStudentInfo}
                            percentages={this.state.percentages}
                        />
                    );
                })}
            </div>
        );
    }
}

export default ClassSelector;

import _ from "lodash";
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { stripSpaces } from "../helpers/helpers";

import Loading from "../components/Loading";
import StudentImg from "../components/StudentImg";
import BackButton from "../components/BackButton";
import SkillsOverview from "../components/SkillsOverview";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const skills = [
    "Sword",
    "Lance",
    "Axe",
    "Bow",
    "Brawl",
    "Reason",
    "Faith",
    "Authority",
    "Heavy Armor",
    "Riding",
    "Flying"
];

class AddStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            availableStudents: [],
            selectedStudents: [],
            filters: []
        };
    }

    addStudent(name) {
        const { selectedStudents } = this.state;
        if (!selectedStudents.includes(name)) {
            selectedStudents.push(name);
        } else {
            const index = _.indexOf(selectedStudents, name);
            selectedStudents.splice(index, 1);
        }
        this.setState({ selectedStudents });
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

    studentMeetsFilterReq(skills) {
        const { filters } = this.state;

        for (let skill of skills) {
            const { name, proficient, budding } = skill;
            if (filters.includes(name) && (proficient || budding)) {
                return true;
            }
        }

        return false;
    }

    renderAvailableStudents() {
        const { filters } = this.state;
        const { availableStudents, selectedStudents } = this.state;

        let studentList = [];
        let lastHouse = null;

        for (let student of availableStudents) {
            const { name, gender, house, skills } = student;
            if (!lastHouse || lastHouse !== house) {
                lastHouse = house;
                studentList.push(
                    <h2 className="padding" key={house}>
                        {house}
                    </h2>
                );
            }

            if (filters.length < 1 || this.studentMeetsFilterReq(skills)) {
                studentList.push(
                    <Grid
                        container
                        className={`roster-row add-student-row${
                            selectedStudents.includes(name)
                                ? ` add-student-selected ${house.replace(
                                      /\s+/g,
                                      ""
                                  )}`
                                : null
                        }`}
                        key={name}
                        onClick={() => this.addStudent(name)}
                    >
                        <Grid item xs={4}>
                            <StudentImg
                                name={name}
                                byleth_gender={gender || "F"}
                                house={house}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <p className="roster-name" style={{ marginTop: 0 }}>
                                {name}
                            </p>
                            <SkillsOverview skills={skills} />
                        </Grid>
                    </Grid>
                );
            }
        }

        return studentList;
    }

    componentDidMount() {
        if (this.props.playthrough && this.props.playthrough.students) {
            axios({
                method: "get",
                url: "/api/app/students"
            }).then((res) => {
                this.setState({
                    availableStudents: res.data.filter((student) => {
                        if (
                            student.recruitable &&
                            !_.find(this.props.playthrough.students, {
                                name: student.name
                            })
                        ) {
                            return student;
                        }
                    })
                });
            });
        }
    }

    render() {
        const { selectedStudents, filters } = this.state;
        if (!this.props.playthrough || !this.props.playthrough.students) {
            return <Loading />;
        }

        return (
            <div>
                <BackButton />
                <h1 className="padding">Add Students</h1>
                <div className="padding skill-filters">
                    {skills.map((name) => {
                        return (
                            <img
                                key={name}
                                onClick={() => this.onFilterChange(name)}
                                className={`skill-filter${
                                    filters.includes(name)
                                        ? " filter-selected"
                                        : ""
                                }`}
                                src={`/img/skills/${stripSpaces(name)}.png`}
                                alt={name}
                                title={name}
                            />
                        );
                    })}
                    {filters.length > 0 ? (
                        <HighlightOffIcon
                            className="hover remove-filters-btn"
                            onClick={() => {
                                this.setState({ filters: [] });
                            }}
                        />
                    ) : null}
                </div>
                <ul>{this.renderAvailableStudents()}</ul>
                <div className="center footer">
                    <Link to="/">
                        <Button
                            className="button"
                            style={{ width: "90%" }}
                            variant="contained"
                            color="primary"
                            onClick={() =>
                                this.props.addStudents(selectedStudents)
                            }
                            disabled={selectedStudents.length < 1}
                        >
                            Add
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default AddStudent;

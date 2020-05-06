import _ from "lodash";
import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import StudentImg from "../components/StudentImg";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

class AddStudent extends Component {
    constructor(props) {
        super(props);

        this.state = { availableStudents: [], selectedStudents: [] };
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

    renderAvailableStudents() {
        const { availableStudents, selectedStudents } = this.state;

        let studentList = [];
        let lastHouse = null;

        for (let student of availableStudents) {
            const { name, gender, house } = student;
            if (!lastHouse || lastHouse !== house) {
                lastHouse = house;
                studentList.push(<h2 key={house}>{house}</h2>);
            }
            studentList.push(
                <div className="roster-row">
                    <StudentImg
                        name={name}
                        byleth_gender={gender || "F"}
                        house={house}
                    />
                </div>
            );
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
        if (!this.props.playthrough || !this.props.playthrough.students) {
            return "loading...";
        }

        return (
            <div>
                <KeyboardBackspaceIcon
                    onClick={() => {
                        this.props.history.push("/");
                    }}
                />
                <h1>Add Students</h1>
                <ul>{this.renderAvailableStudents()}</ul>
                <button
                    onClick={() =>
                        this.props.addStudents(this.state.selectedStudents)
                    }
                >
                    Add!
                </button>
            </div>
        );
    }
}

export default withRouter(AddStudent);

import _ from "lodash";
import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { API_URL } from "./constants";
import "./App.css";

import RequireAuth from "./components/RequireAuth";
import Loading from "./components/Loading";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import NewPlaythrough from "./pages/NewPlaythrough";
import Roster from "./pages/Roster";
import Student from "./pages/Student";
import ClassSelector from "./pages/ClassSelector";
import AddStudent from "./pages/AddStudent";
import Gifts from "./pages/Gifts";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoadingAppData: true,
            isLoadingUserData: true,
            authenticated: false,
            playthrough: null,
            appData: null
        };

        this.authenticateUser = this.authenticateUser.bind(this);
        this.getPlaythrough = this.getPlaythrough.bind(this);
        this.selectClassGoal = this.selectClassGoal.bind(this);
        this.selectClass = this.selectClass.bind(this);
        this.selectSkill = this.selectSkill.bind(this);
        this.addStudents = this.addStudents.bind(this);
        this.removeStudent = this.removeStudent.bind(this);
        this.getStudentOrder = this.getStudentOrder.bind(this);
    }

    authenticateUser(bool) {
        this.setState({ authenticated: bool });
        this.getPlaythrough();
        this.getStudentOrder();
    }

    logOut = () => {
        axios({
            method: "get",
            url: "/api/account/logout"
        })
            .then((res) => {
                if (res.data.logout === "success") {
                    this.authenticateUser(false);
                    this.props.history.push("/");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    async getPlaythrough() {
        axios({
            method: "get",
            url: `${API_URL}/api/user/playthrough`
        }).then((res) => {
            this.setState({ playthrough: res.data, isLoadingUserData: false });
        });
    }

    async selectClassGoal({ studentName, className }) {
        await axios({
            method: "post",
            url: "/api/user/update_student_class_goal",
            params: { studentName, className }
        }).then((res) => {
            if (res.data === "success") {
                this.getPlaythrough();
            }
        });
    }

    async selectClass({ studentName, className }) {
        await axios({
            method: "post",
            url: "/api/user/update_student_class",
            params: { studentName, className }
        }).then((res) => {
            if (res.data === "success") {
                this.getPlaythrough();
            }
        });
    }

    async selectSkill({ studentName, skillName, level }) {
        await axios({
            method: "post",
            url: "/api/user/update_student_skill",
            params: { studentName, skillName, level }
        }).then((res) => {
            if (res.data === "success") {
                this.getPlaythrough();
            }
        });
    }

    async addStudents(names) {
        axios({
            method: "post",
            url: "/api/user/add_students",
            params: { names }
        }).then((res) => {
            if (res.data === "success") {
                this.getPlaythrough();
                this.getStudentOrder();
            }
        });
    }

    removeStudent() {
        this.getPlaythrough();
    }

    async getAppData() {
        let students, classes;

        await axios({
            method: "get",
            url: `${API_URL}/api/app/classes`
        }).then((res) => {
            classes = res.data;
        });

        await axios({
            method: "get",
            url: `${API_URL}/api/app/students`
        }).then((res) => {
            students = res.data;
        });

        this.setState({
            appData: { students, classes },
            isLoadingAppData: false
        });
    }

    getStudentOrder() {
        const { playthrough, appData } = this.state;

        let order = [];
        if (playthrough && appData) {
            const { house } = playthrough;
            const { students } = appData;
            order = students.filter((student) => {
                if (student.house === house) {
                    return student;
                }
            });
            order.unshift({ name: "Byleth" });
            for (let student of students) {
                if (!_.find(order, { name: student.name })) {
                    order.push(student);
                }
            }

            this.setState({ studentOrder: order });
        }
    }

    async componentDidMount() {
        await axios({
            method: "get",
            url: "/api/account/authenticated"
        })
            .then((res) => {
                const { authenticated } = res.data;
                this.setState({ authenticated });
                this.getPlaythrough();
            })
            .catch((err) => {
                console.log(err);
            });

        await this.getAppData();

        this.getStudentOrder();
    }

    render() {
        const {
            isLoadingAppData,
            isLoadingUserData,
            authenticated,
            playthrough,
            appData,
            studentOrder
        } = this.state;

        if (isLoadingAppData || isLoadingUserData) {
            return <Loading />;
        }

        const AuthNewPlaythrough = RequireAuth(NewPlaythrough);
        const AuthRoster = RequireAuth(Roster);
        const AuthStudent = RequireAuth(Student);
        const AuthClassSelector = RequireAuth(ClassSelector);
        const AuthAddStudent = RequireAuth(AddStudent);
        const AuthGifts = RequireAuth(Gifts);

        return (
            <div id="App">
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <AuthRoster
                                    authenticated={authenticated}
                                    authenticateUser={this.authenticateUser}
                                    playthrough={playthrough}
                                    appStudents={appData.students}
                                    studentOrder={studentOrder}
                                    logOut={this.logOut}
                                />
                            )}
                        />
                        <Route
                            path="/login"
                            render={() => (
                                <Login
                                    playthrough={playthrough}
                                    authenticateUser={this.authenticateUser}
                                />
                            )}
                        />
                        <Route
                            path="/signup"
                            render={() => (
                                <Signup
                                    authenticateUser={this.authenticateUser}
                                />
                            )}
                        />
                        <Route
                            path="/new_playthrough"
                            render={() => (
                                <AuthNewPlaythrough
                                    authenticated={authenticated}
                                    getPlaythrough={this.getPlaythrough}
                                    getStudentOrder={this.getStudentOrder}
                                />
                            )}
                        />
                        <Route
                            path="/student/:name"
                            render={() => (
                                <AuthStudent
                                    authenticated={authenticated}
                                    playthrough={playthrough}
                                    selectClass={this.selectClass}
                                    selectSkill={this.selectSkill}
                                    removeStudent={this.removeStudent}
                                    appStudents={appData.students}
                                />
                            )}
                        />
                        <Route
                            path="/select_classes/:name"
                            render={() => (
                                <AuthClassSelector
                                    authenticated={authenticated}
                                    playthrough={playthrough}
                                    selectClassGoal={this.selectClassGoal}
                                    appData={appData}
                                />
                            )}
                        />
                        <Route
                            path="/add_student"
                            render={() => (
                                <AuthAddStudent
                                    authenticated={authenticated}
                                    playthrough={playthrough}
                                    addStudents={this.addStudents}
                                />
                            )}
                        />
                        <Route
                            path="/gifts"
                            render={() => (
                                <AuthGifts
                                    authenticated={authenticated}
                                    playthrough={playthrough}
                                    appStudents={appData.students}
                                    studentOrder={studentOrder}
                                />
                            )}
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

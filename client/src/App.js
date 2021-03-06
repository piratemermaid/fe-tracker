import _ from "lodash";
import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
import Info from "./pages/Info";
import Gifts from "./pages/Gifts";
import LostItems from "./pages/LostItems";
import FacultyTraining from "./pages/FacultyTraining";
import TeaParty from "./pages/TeaParty";
import DevNotes from "./pages/DevNotes";
import { stripSpaces } from "./helpers/helpers";

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
    }

    authenticateUser(bool) {
        this.setState({ authenticated: bool });
        this.getPlaythrough();
    }

    logOut = () => {
        axios({
            method: "get",
            url: "/api/account/logout"
        })
            .then((res) => {
                if (res.data.logout === "success") {
                    this.authenticateUser(false);
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

    async componentDidMount() {
        await axios({
            method: "get",
            url: "/api/account/authenticated"
        })
            .then((res) => {
                const { authenticated } = res.data;
                this.setState({ authenticated });
                if (authenticated) {
                    this.getPlaythrough();
                } else {
                    this.setState({ isLoadingUserData: false });
                }
            })
            .catch((err) => {
                console.log(err);
            });

        await this.getAppData();
    }

    render() {
        const {
            isLoadingAppData,
            isLoadingUserData,
            authenticated,
            playthrough,
            appData
        } = this.state;

        if (isLoadingAppData || isLoadingUserData) {
            return <Loading />;
        }

        const AuthNewPlaythrough = RequireAuth(NewPlaythrough);
        const AuthRoster = RequireAuth(Roster);
        const AuthStudent = RequireAuth(Student);
        const AuthClassSelector = RequireAuth(ClassSelector);
        const AuthAddStudent = RequireAuth(AddStudent);
        const AuthInfo = RequireAuth(Info);
        const AuthGifts = RequireAuth(Gifts);
        const AuthLostItems = RequireAuth(LostItems);
        const AuthFacultyTraining = RequireAuth(FacultyTraining);
        const AuthTeaParty = RequireAuth(TeaParty);

        return (
            <div
                id="App"
                className={playthrough ? stripSpaces(playthrough.house) : ""}
            >
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
                                    logOut={this.logOut}
                                    isLoadingUserData={isLoadingAppData}
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
                            path="/info"
                            render={() => (
                                <AuthInfo authenticated={authenticated} />
                            )}
                        />
                        <Route
                            path="/gifts"
                            render={() => (
                                <AuthGifts
                                    authenticated={authenticated}
                                    playthrough={playthrough}
                                    appStudents={appData.students}
                                />
                            )}
                        />
                        <Route
                            path="/lost_items"
                            render={() => (
                                <AuthLostItems
                                    authenticated={authenticated}
                                    playthrough={playthrough}
                                    appStudents={appData.students}
                                />
                            )}
                        />
                        <Route
                            path="/faculty_training"
                            render={() => (
                                <AuthFacultyTraining
                                    authenticated={authenticated}
                                    appData={appData}
                                />
                            )}
                        />
                        <Route
                            path="/tea_party"
                            render={() => (
                                <AuthTeaParty
                                    authenticated={authenticated}
                                    appData={appData}
                                />
                            )}
                        />
                        <Route path="/dev_notes" component={DevNotes} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

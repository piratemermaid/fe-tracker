import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import NewPlaythrough from "./pages/NewPlaythrough";
import Roster from "./pages/Roster";
import Student from "./pages/Student";
import ClassSelector from "./pages/ClassSelector";
import AddStudent from "./pages/AddStudent";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { authenticated: false, playthrough: null };

        this.authenticateUser = this.authenticateUser.bind(this);
        this.getPlaythrough = this.getPlaythrough.bind(this);
        this.selectClassGoal = this.selectClassGoal.bind(this);
        this.selectClass = this.selectClass.bind(this);
        this.selectSkill = this.selectSkill.bind(this);
    }

    authenticateUser(bool) {
        this.setState({ authenticated: bool });
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
        await axios({
            method: "get",
            url: "http://localhost:8000/api/user/playthrough"
        }).then((res) => {
            this.setState({ playthrough: res.data });
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
        console.log(names);
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
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const { authenticated, playthrough } = this.state;

        const AuthNewPlaythrough = RequireAuth(NewPlaythrough);
        const AuthRoster = RequireAuth(Roster);
        const AuthStudent = RequireAuth(Student);
        const AuthClassSelector = RequireAuth(ClassSelector);
        const AuthAddStudent = RequireAuth(AddStudent);

        return (
            <div className="App">
                <BrowserRouter>
                    <header>
                        {authenticated ? (
                            <nav className="right">
                                <Link to="/login" onClick={this.logOut}>
                                    Log Out
                                </Link>
                            </nav>
                        ) : null}
                    </header>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <AuthRoster
                                    authenticated={authenticated}
                                    authenticateUser={this.authenticateUser}
                                    playthrough={playthrough}
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
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

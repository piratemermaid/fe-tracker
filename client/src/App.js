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
import EditStudent from "./pages/EditStudent";

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
        console.log("update skill -- ", studentName, skillName, level);
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
        const AuthEditStudent = RequireAuth(EditStudent);

        return (
            <div className="App">
                <BrowserRouter>
                    <header>
                        {authenticated ? (
                            <nav>
                                <Link to="/">Roster</Link>
                                <Link to="/new_playthrough">
                                    New Playthrough
                                </Link>
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
                            path="/edit_student/:name"
                            render={() => (
                                <AuthEditStudent
                                    authenticated={authenticated}
                                    playthrough={playthrough}
                                    selectClassGoal={this.selectClassGoal}
                                    selectClass={this.selectClass}
                                    selectSkill={this.selectSkill}
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

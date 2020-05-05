import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Page from "./pages/Page";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { authenticated: false };

        this.authenticateUser = this.authenticateUser.bind(this);
    }

    authenticateUser(bool) {
        this.setState({ authenticated: bool });
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "/api/account/authenticated"
        })
            .then((res) => {
                this.setState({ authenticated: res.data.authenticated });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const { authenticated } = this.state;

        const AuthPage = RequireAuth(Page);

        return (
            <div className="App">
                <BrowserRouter>
                    <header>
                        <Link to="/">App</Link>
                        <nav>
                            <Link to="/page">Page</Link>
                        </nav>
                    </header>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Home
                                    authenticated={authenticated}
                                    authenticateUser={this.authenticateUser}
                                />
                            )}
                        />
                        <Route
                            path="/login"
                            render={() => (
                                <Login
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
                            path="/page"
                            render={() => (
                                <AuthPage
                                    authenticated={authenticated}
                                    authenticateUser={this.authenticateUser}
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

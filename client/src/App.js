import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { authenticated: false };

        this.authenticateUser = this.authenticateUser.bind(this);
    }

    authenticateUser(bool) {
        this.setState({ authenticated: bool });
    }

    render() {
        const { authenticated } = this.state;

        return (
            <div className="App">
                <BrowserRouter>
                    <header>
                        <Link to="/">App</Link>
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
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

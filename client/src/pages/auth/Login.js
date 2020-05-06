import React, { Component } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            errorMessage: null
        };
    }

    onSubmit(e) {
        e.preventDefault();

        const { username, password } = this.state;
        axios({
            method: "post",
            url: "/api/account/login",
            params: { username, password }
        })
            .then((res) => {
                if (res.data.login === "success") {
                    this.props.authenticateUser(true);
                    // TODO: reroute to roster and then prompt to start
                    // new playthrough if none
                    this.props.history.push("/");
                }
            })
            .catch((err) => {
                this.setState({ errorMessage: err.response.data });
            });
    }

    onInputChange(e, field) {
        this.setState({ errorMessage: null });
        this.setState({ [field]: e.target.value });
    }

    render() {
        const { username, password, errorMessage } = this.state;
        return (
            <div className="center">
                <h1>Log In</h1>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div className="input-field">
                        <input
                            id="username"
                            type="text"
                            placeholder="username"
                            value={username}
                            onChange={(e) => this.onInputChange(e, "username")}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            id="password"
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => this.onInputChange(e, "password")}
                        />
                    </div>
                    <div className="form-error">{errorMessage}</div>
                    <Button
                        className="auth-button"
                        variant="contained"
                        color="primary"
                        onClick={(e) => this.onSubmit(e)}
                    >
                        Log In
                    </Button>
                    <div>
                        Don't have an account yet?{" "}
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);

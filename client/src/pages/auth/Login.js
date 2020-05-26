import React, { Component } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";

import Loading from "../../components/Loading";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            errorMessage: null,
            isLoading: false
        };
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({ isLoading: true });

        const { username, password } = this.state;
        axios({
            method: "post",
            url: "/api/account/login",
            params: { username, password }
        })
            .then((res) => {
                if (res.data.login === "success") {
                    this.props.authenticateUser(true);
                    this.props.history.push("/");
                }
            })
            .catch((err) => {
                this.setState({ errorMessage: err.response.data });
            });
    }

    useDemoAccount(e) {
        this.setState({ username: "testuser", password: "userpass12" });
        this.onSubmit(e);
    }

    onInputChange(e, field) {
        this.setState({ errorMessage: null });
        this.setState({ [field]: e.target.value });
    }

    render() {
        const { username, password, errorMessage, isLoading } = this.state;

        if (isLoading) {
            return <Loading />;
        }

        return (
            <div className="center">
                <h2>Log In</h2>
                <Grid container justify="center">
                    <form onSubmit={(e) => this.onSubmit(e)}>
                        <Grid item className="auth-input">
                            <TextField
                                type="text"
                                label="username"
                                value={username}
                                onChange={(e) =>
                                    this.onInputChange(e, "username")
                                }
                            />
                        </Grid>
                        <Grid item className="auth-input">
                            <TextField
                                type="password"
                                label="password"
                                value={password}
                                onChange={(e) =>
                                    this.onInputChange(e, "password")
                                }
                            />
                        </Grid>
                        <div className="form-error">{errorMessage}</div>
                        <Button
                            className="button"
                            variant="contained"
                            color="primary"
                            onClick={(e) => this.onSubmit(e)}
                        >
                            Log In
                        </Button>
                        <br />
                        <Button
                            className="button"
                            variant="contained"
                            color="primary"
                            onClick={(e) => this.useDemoAccount(e)}
                        >
                            Demo Account
                        </Button>
                        <div>
                            Don't have an account yet?{" "}
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    </form>
                </Grid>
            </div>
        );
    }
}

export default withRouter(Login);

import React, { Component } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            passwordMatch: "",
            errorMessage: null
        };
    }

    onSubmit(e) {
        e.preventDefault();

        const error = this.validateFields();

        if (error) {
            this.setState({ errorMessage: error });
        } else {
            const { username, password, passwordMatch, email } = this.state;
            axios({
                method: "post",
                url: "/api/account/signup",
                params: { username, password, passwordMatch, email }
            })
                .then((res) => {
                    if (res.data.signup === "success") {
                        this.props.authenticateUser(true);
                        this.props.history.push("/");
                    }
                })
                .catch((err) => {
                    this.setState({ errorMessage: err.response.data });
                });
        }
    }

    onInputChange(e, field) {
        this.setState({ errorMessage: null });
        this.setState({ [field]: e.target.value });
    }

    validateFields() {
        const { username, password, passwordMatch, email } = this.state;

        if (!username) {
            return "Please enter a username";
        }
        if (!email) {
            return "Please enter an email";
        }
        if (!password) {
            return "Please enter a password";
        }
        if (!passwordMatch) {
            return "Please enter a matching password";
        }

        if (username.length < 8) {
            return "Please enter a longer username";
        }
        if (password.length < 10) {
            return "Please enter a password of at least 10 characters";
        }
        if (passwordMatch !== password) {
            return "Please enter a matching password";
        }
        if (!validateEmail) {
            return "Invalid email";
        }
    }

    render() {
        const {
            username,
            email,
            password,
            passwordMatch,
            errorMessage
        } = this.state;
        return (
            <div className="center">
                <h1>Sign Up</h1>
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
                                type="text"
                                label="email"
                                value={email}
                                onChange={(e) => this.onInputChange(e, "email")}
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
                        <Grid item className="auth-input">
                            <TextField
                                type="password"
                                label="passwordMatch"
                                value={passwordMatch}
                                onChange={(e) =>
                                    this.onInputChange(e, "passwordMatch")
                                }
                            />
                        </Grid>
                        <div className="form-error">{errorMessage}</div>
                        <Button
                            className="auth-button"
                            variant="contained"
                            color="primary"
                            onClick={(e) => this.onSubmit(e)}
                        >
                            Sign Up
                        </Button>
                    </form>
                </Grid>
                <div>
                    Already have an account? <Link to="/login">Log In</Link>
                </div>
            </div>
        );
    }
}

function validateEmail(email) {
    //eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default withRouter(Signup);

import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const Home = (props) => {
    const logOut = () => {
        axios({
            method: "get",
            url: "/api/account/logout"
        })
            .then((res) => {
                if (res.data.logout === "success") {
                    props.authenticateUser(false);
                    props.history.push("/");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h1>Home</h1>
            {!props.authenticated ? (
                <div>
                    <Link to="/login">Log In</Link> |{" "}
                    <Link to="/signup">Sign Up</Link>
                </div>
            ) : (
                <a onClick={logOut}>Log Out</a>
            )}
        </div>
    );
};

export default withRouter(Home);

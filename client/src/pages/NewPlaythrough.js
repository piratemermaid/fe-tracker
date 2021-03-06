import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import BackButton from "../components/BackButton";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class NewPlaythrough extends Component {
    constructor(props) {
        super(props);

        this.state = { house: null, byleth: null };
    }

    selectHouse(house) {
        this.setState({ house });
    }

    selectByleth(byleth) {
        this.setState({ byleth });
    }

    startNewPlaythrough = () => {
        const { house, byleth } = this.state;

        axios({
            method: "post",
            url: "api/user/new_playthrough",
            params: { house, byleth }
        })
            .then((res) => {
                if (res.data === "success") {
                    this.props.history.push("/");
                    this.props.getPlaythrough();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    houseButtonUI(house) {
        const imgSrc = `/img/banners/${house.replace(/\s+/g, "_")}_Banner.png`;
        let imgClass = "banner-choice new-playthrough-choice";
        if (this.state.house === house) {
            imgClass += " new-playthrough-choice-selected";
        }

        return (
            <Grid item xs={4} onClick={() => this.selectHouse(house)}>
                <img
                    src={imgSrc}
                    className={imgClass}
                    alt={house}
                    title={house}
                />
            </Grid>
        );
    }

    bylethButtonUI(byleth) {
        const imgSrc = `/img/students/Byleth_${byleth}.png`;
        let imgClass = "byleth-choice new-playthrough-choice";
        if (this.state.byleth === byleth) {
            imgClass += " new-playthrough-choice-selected";
        }

        return (
            <Grid item xs={4} onClick={() => this.selectByleth(byleth)}>
                <img
                    src={imgSrc}
                    className={imgClass}
                    alt={`Byleth-${byleth}`}
                    title={`Byleth-${byleth}`}
                />
            </Grid>
        );
    }

    submitButtonUI() {
        if (this.state.house && this.state.byleth) {
            return (
                <Button
                    className={`button ${this.state.house.replace(/\s+/g, "")}`}
                    variant="contained"
                    color="primary"
                    onClick={this.startNewPlaythrough}
                >
                    Start!
                </Button>
            );
        } else {
            return (
                <Button
                    className="button"
                    variant="contained"
                    color="primary"
                    disabled
                >
                    Start
                </Button>
            );
        }
    }

    render() {
        return (
            <div>
                <BackButton />
                <div className="padding center">
                    <h2>New Playthrough</h2>
                    <h3>Select House</h3>
                    <Grid container spacing={2}>
                        {this.houseButtonUI("Black Eagles")}
                        {this.houseButtonUI("Blue Lions")}
                        {this.houseButtonUI("Golden Deer")}
                    </Grid>
                    <h3>Select Byleth</h3>
                    <Grid container justify="center" spacing={2}>
                        {this.bylethButtonUI("M")}
                        {this.bylethButtonUI("F")}
                    </Grid>
                    {this.submitButtonUI()}
                </div>
            </div>
        );
    }
}

export default withRouter(NewPlaythrough);

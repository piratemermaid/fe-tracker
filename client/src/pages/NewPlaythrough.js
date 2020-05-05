import React, { Component } from "react";
import axios from "axios";

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
                    this.props.getPlaythrough();
                    this.props.history.push("/");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    houseButtonUI(house) {
        return (
            <li>
                <button
                    onClick={() => this.selectHouse(house)}
                    className={
                        this.state.house === house
                            ? "btn choice-btn-selected"
                            : "btn choice-btn"
                    }
                >
                    {house}
                </button>
            </li>
        );
    }

    bylethButtonUI(byleth) {
        return (
            <li>
                <button
                    onClick={() => this.selectByleth(byleth)}
                    className={
                        this.state.byleth === byleth
                            ? "btn choice-btn-selected"
                            : "btn choice-btn"
                    }
                >
                    {byleth}
                </button>
            </li>
        );
    }

    submitButtonUI() {
        if (this.state.house && this.state.byleth) {
            return <button onClick={this.startNewPlaythrough}>Start!</button>;
        } else {
            return <button disabled>Start!</button>;
        }
    }

    render() {
        return (
            <div>
                <h1>New Playthrough</h1>
                <h2>Select House</h2>
                <ul>
                    {this.houseButtonUI("Black Eagles")}
                    {this.houseButtonUI("Blue Lions")}
                    {this.houseButtonUI("Golden Deer")}
                </ul>
                <h2>Select Byleth</h2>
                <ul>
                    {this.bylethButtonUI("M")}
                    {this.bylethButtonUI("F")}
                </ul>
                <ul></ul>
                {this.submitButtonUI()}
            </div>
        );
    }
}

export default NewPlaythrough;

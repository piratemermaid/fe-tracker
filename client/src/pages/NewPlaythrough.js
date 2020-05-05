import React, { Component } from "react";

class NewPlaythrough extends Component {
    constructor(props) {
        super(props);

        this.state = { house: null, byleth: null };
    }

    selectHouse(house) {
        console.log("click", house);
        this.setState({ house });
    }

    selectByleth(byleth) {
        this.setState({ byleth });
    }

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
            return (
                <button onClick={() => console.log("start new playthrough!!")}>
                    Start!
                </button>
            );
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
                    {this.bylethButtonUI("male")}
                    {this.bylethButtonUI("female")}
                </ul>
                <ul></ul>
                {this.submitButtonUI()}
            </div>
        );
    }
}

export default NewPlaythrough;

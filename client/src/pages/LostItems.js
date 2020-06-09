import _ from "lodash";
import React, { Component } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import Loading from "../components/Loading";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { houseRGB } from "../helpers/uihelpers";

class LostItems extends Component {
    constructor(props) {
        super(props);

        this.state = { months: {}, userLostItems: [] };
    }

    handleCheck(e, name, type) {
        axios({
            method: "post",
            url: "/api/user/toggle_lost_item",
            params: { name, type }
        }).then((res) => {
            if (res.data === "success") {
                this.fetchUserLostItems();
            }
        });
    }

    fetchUserLostItems() {
        axios({
            method: "get",
            url: "/api/user/lost_items"
        }).then((res) => {
            this.setState({ userLostItems: res.data });
        });
    }

    isChecked(name, type) {
        const { userLostItems } = this.state;
        const exists = _.find(userLostItems, { name });
        if (!exists) {
            return false;
        }

        if (exists[type]) {
            return true;
        } else {
            return false;
        }
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "/api/app/lost_items_by_month"
        }).then((res) => {
            this.setState({ lostItems: res.data });
        });

        this.fetchUserLostItems();
    }

    render() {
        if (!this.state.lostItems) {
            return <Loading />;
        }

        return (
            <div id="lost-items" className="padding">
                <BackButton url="/info" />
                <h2>Lost Items</h2>
                {this.state.lostItems.map(({ name, lostItems }) => {
                    return (
                        <div>
                            <h4>{name}</h4>
                            <ul className="lost-item-list">
                                {lostItems.map(
                                    ({
                                        name,
                                        location,
                                        student,
                                        condition
                                    }) => {
                                        // TODO: factor in conditions
                                        return (
                                            <li>
                                                {name} - {location} ({student})
                                                <br />
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={this.isChecked(
                                                                name,
                                                                "found"
                                                            )}
                                                            onChange={(e) =>
                                                                this.handleCheck(
                                                                    e,
                                                                    name,
                                                                    "found"
                                                                )
                                                            }
                                                            style={{
                                                                color: houseRGB(
                                                                    this.props
                                                                        .playthrough
                                                                        .house
                                                                )
                                                            }}
                                                        />
                                                    }
                                                    label="found"
                                                />
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={this.isChecked(
                                                                name,
                                                                "returned"
                                                            )}
                                                            onChange={(e) =>
                                                                this.handleCheck(
                                                                    e,
                                                                    name,
                                                                    "returned"
                                                                )
                                                            }
                                                            style={{
                                                                color: houseRGB(
                                                                    this.props
                                                                        .playthrough
                                                                        .house
                                                                )
                                                            }}
                                                        />
                                                    }
                                                    label="returned"
                                                />
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default LostItems;

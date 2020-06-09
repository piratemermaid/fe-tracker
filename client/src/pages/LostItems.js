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

        this.state = { months: {} };
    }

    handleCheck(e, name, type) {
        console.log(name, type);
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "/api/app/lost_items_by_month"
        }).then((res) => {
            this.setState({ lostItems: res.data });
        });
    }

    render() {
        if (!this.state.lostItems) {
            return <Loading />;
        }

        return (
            <div id="lost-items" className="padding">
                <BackButton url="/info" />
                <h2>Lost Items (IN PROGRESS)</h2>
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
                                                            checked={false}
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
                                                            checked={false}
                                                            onChange={(e) =>
                                                                this.handleCheck(
                                                                    e,
                                                                    name,
                                                                    "delivered"
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
                                                    label="delivered"
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

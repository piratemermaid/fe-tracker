import React, { Component } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import Loading from "../components/Loading";

class LostItems extends Component {
    constructor(props) {
        super(props);

        this.state = { months: {} };
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
            <div className="padding">
                <BackButton url="/info" />
                <h2>Lost Items (IN PROGRESS)</h2>
                {this.state.lostItems.map(({ name, lostItems }) => {
                    return (
                        <ul className="styled-list">
                            <h4>{name}</h4>
                            {lostItems.map(
                                ({ name, location, student, condition }) => {
                                    return (
                                        <li>
                                            {name} - {location} ({student})
                                        </li>
                                    );
                                }
                            )}
                        </ul>
                    );
                })}
            </div>
        );
    }
}

export default LostItems;

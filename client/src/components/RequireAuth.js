import React, { PropTypes } from "react";
import { withRouter } from "react-router-dom";

export default function (ComposedComponent) {
    class RequireAuth extends React.Component {
        componentDidMount() {
            this.checkAndRedirect();
        }

        componentDidUpdate() {
            this.checkAndRedirect();
        }

        checkAndRedirect() {
            const { authenticated } = this.props;

            if (!authenticated) {
                this.props.history.push("/");
            }
        }

        render() {
            return (
                <div>
                    {this.props.authenticated ? (
                        <ComposedComponent {...this.props} />
                    ) : null}
                </div>
            );
        }
    }

    return withRouter(RequireAuth);
}

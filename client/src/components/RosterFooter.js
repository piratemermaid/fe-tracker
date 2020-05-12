import React from "react";
import { Link, withRouter } from "react-router-dom";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const RosterFooter = (props) => {
    const promptLogout = () => {
        const logout = window.confirm("Do you want to log out?");

        if (logout) {
            props.logOut();
        }
    };

    return (
        <BottomNavigation>
            <Link to="/new_playthrough">
                <BottomNavigationAction
                    label="Recents"
                    value="recents"
                    icon={<AddCircleIcon />}
                />
            </Link>
            <Link to="/gifts">
                <BottomNavigationAction
                    label="Nearby"
                    value="nearby"
                    icon={<CardGiftcardIcon />}
                />
            </Link>
            <Link to="/" onClick={promptLogout}>
                <BottomNavigationAction
                    label="Folder"
                    value="folder"
                    icon={<ExitToAppIcon />}
                />
            </Link>
        </BottomNavigation>
    );
};

export default withRouter(RosterFooter);

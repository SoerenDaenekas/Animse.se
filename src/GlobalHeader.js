import { getLoggedInUserInfo } from './Authentification';
import './GlobalHeader.css';
import React from 'react';

function MenuItem(props) {
    function onClickHandler() {
        document.location = props.address
    }

    return (
        <a href="#" className="menuItem col-auto" onClick={() => onClickHandler()}>
            {props.name}
        </a>
    );
}

function GlobalHeader() {
    const [fullName, setFullName] = React.useState("")

    getLoggedInUserInfo().then(data =>{setFullName(data.data.first_name + " " + data.data.last_name)})

    return (
        <div className="globalheader fixed-top container-fluid">
            <header className="navbar globalheaderContent custom-container">
                <h3 className="menuItem col-auto fw-bold">
                    Animse
                </h3>
                <div className="col"/>
                <div className="col-auto">{fullName}</div>
                <MenuItem name="Login" address="/login"/>
            </header>
        </div>
    )
}


export default GlobalHeader;
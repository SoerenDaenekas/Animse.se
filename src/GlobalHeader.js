import './GlobalHeader.css';

function MenuItem(props) {
    function onClickHandler() {
        document.location = props.address
    }

    return (
        <div className="menuItem col-auto" onClick={() => onClickHandler()}>
            {props.name}
        </div>
    );
}

function GlobalHeader() {
    return (
        <div className="globalheader fixed-top container-fluid">
            <header className="navbar custom-container">
                <h3 className="menuItem col-auto fw-bold">
                    Animse
                </h3>
                <div className="col"/>
                <MenuItem name="Account" address="/login"/>
            </header>
        </div>
    )
}


export default GlobalHeader;
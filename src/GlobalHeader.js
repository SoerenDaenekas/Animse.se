import './GlobalHeader.css';

function MenuItem(props) {
    return (
        <div className="menuItem col-auto">
            {props.name}
        </div>
    );
}

function GlobalHeader() {
    return (
        <div>
            <header className="globalheader">
                <div className="globalheaderContent">
                    <div className="row">
                        <div className="menuItem col-auto">
                            Animse.se
                        </div>
                        <MenuItem name="Events" />
                        <MenuItem name="Awoooo" />
                        <MenuItem name="okay"/>
                        <div className="col"/>
                        <div className="menuItem col-auto">
                            Logga I
                        </div>
                    </div>

                </div>

            </header>
            <div className="headerSpacer"></div>
        </div>
    )
}


export default GlobalHeader;
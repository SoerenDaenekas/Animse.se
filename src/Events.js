import React from 'react';
import './Events.css';

function SingleEvent(props) {
    var eventInfo = props.eventInfo

    var date = new Date(eventInfo.startdate)
    var timeFormatOptions = { hour: "2-digit", minute: "2-digit" };
    var dateFormatOptions = { day: "numeric", month: "short", year: "numeric" }

    return (
        <div className="bg-light mt-2 row">
            <div className="col-md-3 d-flex align-items-center">
                <img className="img-fluid" src={"http://api.animse.se:8055/assets/" + eventInfo.banner}/>
            </div>
            <div className="col-md my-2">
                <div className="col text-start">
                    <h5 className="text-muted">{eventInfo.organizer}</h5>
                    <h4 className="">{eventInfo.title}</h4>
                    <div className="">{eventInfo.shortdescription}</div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="row">
                    <div className="col-auto  mt-4 mb-2 ">
                        <div className="row">
                            <div className="d-flex col-auto h3 align-items-center">
                                <i className="bi bi-clock"></i>
                            </div>
                            <div className="col text-start">
                                <div className="h6 text-muted">{date.toLocaleString("sv-SE", dateFormatOptions)}</div>
                                <div className="h4">{date.toLocaleString("sv-SE", timeFormatOptions)}</div>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-auto h4">
                                <i className="bi bi-box-arrow-in-right"></i>
                            </div>
                            <div className="col h6 d-flex  align-items-center">
                                {eventInfo.location}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

class Events extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
            status: 'loading'
        }
    }

    componentDidMount() {
        fetch("http://api.animse.se:8055/items/animeevents/")
        .then(res => res.json())
        .then((data) => {
            this.setState({
                events: data.data,
                status: 'idle'
            })
        })        
    }

    render() {
        if (this.state.status === 'loading') {
            return (
                <div>
                    loading....
                </div>
            )
        }

    
        return (
            <div className="Events container"> 
            {
                this.state.events.map(e => <SingleEvent eventInfo={e} />)
            }            
            </div>
        );
    }
}


export default Events;
import React from 'react';
import './Events.scss';

function SingleEvent(props) {
    var timeFormatOptions = { hour: "2-digit", minute: "2-digit" };
    var dateFormatOptions = { day: "numeric", month: "short", year: "numeric" }
    
    var eventInfo = props.eventInfo

    var startDate = new Date(eventInfo.startdate)
    let formattedStartDate = startDate.toLocaleString("sv-SE", dateFormatOptions)
    let formattedStartTime = startDate.toLocaleString("sv-SE", timeFormatOptions)

    if (eventInfo.enddate !== null) {
        var endDate = new Date(eventInfo.enddate)
        var formattedEndDate = endDate.toLocaleString("sv-SE", dateFormatOptions)
        var formattedEndTime = endDate.toLocaleString("sv-SE", timeFormatOptions)
    }

    let imgUrl = "http://api.animse.se:8055/assets/" + eventInfo.banner;


    let eventLocation = eventInfo.location

    return (
        <div className="bg-light shadow mt-4 row border rounded-10 overflow-hidden">
            <div className="col-lg-4 p-0 overflow-hidden singleEventBannerContainer">
                <div className="singleEventBanner">
                    <img className="object-fit-cover" src={imgUrl}/>
                </div>
            </div>
            <div className="col-lg px-5 py-3">
                <div className="col text-start">
                    <h6 className="text-muted">{eventInfo.organizer}</h6>
                    <h5 className="fw-bold">{eventInfo.title}</h5>
                    <div>{eventInfo.shortdescription}</div>
                </div>

                <div className="row">
                    <div className="col-auto mt-4">
                        <div className="row">
                            <div className="col-auto d-flex align-items-center">
                                <i className="bi bi-clock custom-red h3"></i>
                            </div>
                            <div className="col-auto text-start">
                                <div className="h6 text-muted">{formattedStartDate}</div>
                                <div className="h5 pb-0">{formattedStartTime}</div>
                            </div>
                            {
                                endDate === undefined ? null : 
                                [
                                    <div className="col-auto d-flex  align-items-center">
                                        <i className="bi bi-arrow-right h3 custom-red"></i>
                                    </div>,
                                    <div className="col-auto text-start">
                                        <div className="h6 text-muted">{formattedEndDate}</div>
                                        <div className="h5 pb-0">{formattedEndTime}</div>
                                    </div>
                                ]
                            }
                        </div>
                        <hr className="row"/>
                        <div className="row">
                            <div className="col-auto h4 custom-red">
                                <i className="bi bi-box-arrow-in-right custom-red"></i>
                            </div>
                            <div className="col h6 d-flex  align-items-center">
                                {eventLocation}
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
            <div className="custom-container mb-5"> 
            {
                this.state.events.map(e => <SingleEvent eventInfo={e} />)
            }            
            </div>
        );
    }
}


export default Events;
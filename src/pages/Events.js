import React from 'react';
import './Events.scss';
import {getEvents} from '../Authentification'


function createTimeLocationDisplay(startDateString, endDateString, location) {
    var timeFormatOptions = { hour: "2-digit", minute: "2-digit" };
    var dateFormatOptions = { day: "numeric", month: "short", year: "numeric" }

    var startDate = new Date(startDateString)
    let formattedStartDate = startDate.toLocaleString("sv-SE", dateFormatOptions)
    let formattedStartTime = startDate.toLocaleString("sv-SE", timeFormatOptions)

    if (endDateString !== undefined && endDateString !== null) {
        var endDate = new Date(endDateString)
        var formattedEndDate = endDate.toLocaleString("sv-SE", dateFormatOptions)
        var formattedEndTime = endDate.toLocaleString("sv-SE", timeFormatOptions)
    }

    return [
        <>
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
                        {location}
                    </div>
                </div>
        </>
                ]
}

function SingleEvent(props) {

    var eventInfo = props.eventInfo

    if (!eventInfo.description) eventInfo.description = eventInfo.shortdescription


    let imgUrl = "http://api.animse.se:8055/assets/" + eventInfo.banner;
    

    let eventLocation = eventInfo.location

    if (eventInfo.banner === undefined || eventInfo.banner === null) return (
        <div className="bg-light shadow mt-4 row border rounded-10 overflow-hidden">
            <div className="col-lg px-5 py-3">
                <div className="col text-start">
                    <h6 className="text-muted">{eventInfo.organizer}</h6>
                    <h5 className="fw-bold">{eventInfo.title}</h5>
                    <div>{eventInfo.description}</div>
                </div> 
            </div>
            <div className="col-lg-auto px-5 py-2">
                {createTimeLocationDisplay(eventInfo.startdate, eventInfo.enddate, eventLocation)}
            </div>
        </div>
    )
    else return (
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
                    <div>{eventInfo.description}</div>
                </div>
                <div className="row">
                    <div className="col-auto mt-4">
                        {createTimeLocationDisplay(eventInfo.startdate, eventInfo.enddate, eventLocation)}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Events() {
    var [state, setState] = React.useState({
        events: [],
        status: 'loading'
    })

    React.useEffect(() => {
        getEvents().then((data) => {
            setState({
                events: data.data,
                status: 'idle'
            })
        }) 
    }, [])


    if (state.status === 'loading') {
        return (
            <div>
                loading....
            </div>
        )
    }

    return (
        <div className="custom-container py-4 flex-grow-1"> 
        {
            state.events.map(e => <SingleEvent key={"todo" + e.shortdescription} eventInfo={e} />)
        }            
        </div>
    );
}

export default function EventsScreen() {
    return (
        <div className="pageContainer events">
            <Events/>
        </div>
    )
};
import './Events.css';

function SingleEvent(props) {
    var eventInfo = props.eventInfo

    return (
        <div className="SingleEvent row">
            <div className="Countdown col-md-3">
                imagine an image here
            </div>
            <div className="Info col-md-7">
                <div className="row">
                    <div className="Title col-auto">{eventInfo.title}</div>
                    <div className="Date col">{eventInfo.startDate} - {eventInfo.endDate}</div>
                </div>
            </div>
            <div className="Location col-md-2">
                {eventInfo.place}
            </div>
        </div>
    );
}

function Events(props) {
    var events = [
        {
            title: "ACCS Möte", 
            place: "Awoogatan 69, 99966 Stockholm, Sverige",
            startDate: "16.10.1993",
            endDate: "12.11.1996",
        },
    ];
    for (let index = 0; index < 30; index++) {
        events.push(events[0])
    }
    events.push(events[0])

    return (
        <div className="Events container"> 
        {
            events.map(e => <SingleEvent eventInfo={e} />)
        }            
        </div>
    );
}
 

export default Events;
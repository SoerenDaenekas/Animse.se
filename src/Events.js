import React from 'react';
import './Events.css';

function SingleEvent(props) {
    var eventInfo = props.eventInfo

    return (
        <div className="SingleEvent row">
            <div className="Countdown col-md-3">
                <img className="img-fluid" src={"http://api.animse.se:8055/assets/" + eventInfo.banner}/>
            </div>
            <div className="Info col-md-7">
                <div className="row">
                    <div className="Title col-auto">{eventInfo.title}</div>
                    <div className="Date col">{eventInfo.startdate} - {eventInfo.enddate}</div>
                    <div>{eventInfo.shortdescription}</div>
                </div>
            </div>
            <div className="Location col-md-2">
                {eventInfo.location}
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
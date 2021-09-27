import React, { useState } from 'react';
import FormPage from '../FormPage';
import { createEvent } from '../Authentification'

async function createEvente(e) {
    e.preventDefault()


    await createEvent(this.eventName, this.eventDate, this.eventLocation, this.eventShortDescription)
}

function CreateEventForm() {
    const [eventName, setEventName] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [eventLocation, setEventLocation] = useState("")
    const [eventShortDescription, setEventShortDescription] = useState("")
    //todo picture

    return (

        <form className="row">
            <div className="form-row">
                <div className="form-group">
                    <label for="eventNameInput">Event name:</label>
                    <input type="text"  value={eventName} onChange={e => setEventName(e.target.value)}  class="form-control" id="eventNameInput" placeholder="Event Name"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label for="eventDateInput">Event date:</label>
                    <input type="date"  value={eventDate} onChange={e => setEventDate(e.target.value)}  class="form-control" id="eventDateInput" placeholder="Event Date"/>
                </div>
                <div className="form-group">
                    <label for="eventLocationInput">Event location:</label>
                    <input type="text" value={eventLocation} onChange={e => setEventLocation(e.target.value)}  class="form-control" id="eventLocationInput" placeholder="Location"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label for="eventShortDescriptionInput">Short description:</label>
                    <input type="text"  value={eventShortDescription} onChange={e => setEventShortDescription(e.target.value)}  class="form-control" id="eventShortDescriptionInput" placeholder="Short description"/>
                </div>
            </div>
            <div className="form-row">
                <button type="submit" 
                        className="btn btn-primary ms-auto" 
                        onClick={createEvente.bind({ eventName, eventDate, eventLocation, eventShortDescription })}>Logga i</button>
            </div>
         </form>
    )
}

export default function CreateEvent() {
    return (
        <FormPage>
            <CreateEventForm/>
        </FormPage>
    )
}

import React from 'react';
import FormPage from '../FormPage';

function CreateEventForm() {
    return (

        <form className="row">
            <div className="form-row">
                <div className="form-group">
                    <label for="formGroupExampleInput2">Event name:</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Event Name"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label for="formGroupExampleInput2">Event date:</label>
                    <input type="date" class="form-control" id="formGroupExampleInput2" placeholder="Event Date"/>
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Event location:</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Location"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label for="formGroupExampleInput2">short description:</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Short description"/>
                </div>
            </div>
            <div className="form-row">
                uwu todo picture
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

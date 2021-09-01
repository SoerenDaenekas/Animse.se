import React from 'react';

function createEvent() {
    return (

<form>
    <div className="form-row">
        <div className="form-group">
                <label for="formGroupExampleInput2">Event name</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
        </div>
    </div>
    <div className="form-row">
        <div className="form-group">
                <label for="formGroupExampleInput2">Event date</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
        </div>
        <div className="form-group">
                <label for="formGroupExampleInput2">Event location</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
        </div>
    </div>
    <div className="form-row">
        <div className="form-group">
                <label for="formGroupExampleInput2">short description</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
        </div>
    </div>
    <div className="form-row">
        uwu todo picture
    </div>
</form>
    )
}

export default createEvent

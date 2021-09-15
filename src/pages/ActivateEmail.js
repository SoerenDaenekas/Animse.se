import React from 'react';


function uwu() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            email: this.email
        })
    };
    
    fetch("https://api.animse.se/register/sendConfirmationEmail", requestOptions)
    .then(res => {
        console.log(res)
        if (res.status === 200) {
            this.setState("success")
        }

        return res.json()
    })
    .then((data) => {
        console.log(data)
    })
}


function ActivateEmail() {
    var [state, setState] = React.useState("idle")
    
    if (state === "idle") {
        return (<div>
            <button onClick={_ => setState("sending")}>click me to uwu (send email)</button>
        </div>)
    }

    if (state === "sending"){
        return (<div>
            please wait, uwu (sending email)
        </div>)
    }

    if (state === "inputCode") {
        // todo
        return (<div>
            todo - allow inputting code
        </div>)
    }

    if (state === "validatingCode") {
        return (<div>
            please wait, owo (checking code)
        </div>)
    }

    if (state === "codeValidated") {
        return (<div>
            code is okay c:
        </div>)
    }

    return (<div>
        ??? how did you get here ???
    </div>)


}


export default ActivateEmail
import React from 'react';
import './CreateAccount.css';

function OnRegister(e) {
    e.preventDefault()

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: this.email, password: this.email })
    };

    fetch("http://api.animse.se:8055/users", requestOptions)
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

function CreateAccountForm() {
    var [state, setState] = React.useState("idle")
    var [email, setEmail] = React.useState("")
    var [password, setPassword] = React.useState("")

    if (state === "idle") return (
        <form className="row gy-2 p-3">

            <div className="col-12 text-start">
                <h4>Skapa ett <red>konto</red> för att:</h4>
                <ul className="ps-5">
                    <li>gilla och följa föreningar</li>
                    <li>markera intresse för träffar</li>
                    <li>skapa föreningar och egna event</li>
                </ul>
            </div>


            <div className="col-6">
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Förnamn" />
            </div>
            <div className="col-6">
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Efternamn" />
            </div>

            <div className="col-12">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
            </div>


            <div className="col-12">
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Lösenord" />
            </div>

            <div className="col-6 text-start mt-4">
                Har du redan ett konto?
            </div>
            <div className="col-6 d-flex justify-content-end">
                <button type="submit" className="btn btn-primary ms-auto" onClick={OnRegister.bind({ email, password, setState })}>Skapa konto</button>
            </div>
 
        </form>

    )
}

function CreateAccount() {
    return (
        <div className="pt-5">
            <div className="container">
                <div className="row justify-content-center"> 
                    <div className="col-xl-6 col-lg-8 col-md-10 col-12 createAccount bg-light"> 
                        {/* todo: there must be a nicer way */}
                        <CreateAccountForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function CreateAccountContainer() {
    return (
        <div className="pageContainer">
            <CreateAccount/>
        </div>
    )
}
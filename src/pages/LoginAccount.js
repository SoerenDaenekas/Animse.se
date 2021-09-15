import React from 'react';
import './CreateAccount.css';
import FormPage from '../FormPage';

function OnLogin(e) {
    e.preventDefault()

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: this.email, password: this.email })
    };

    fetch("todo", requestOptions)
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

function LoginForm(onSubmit) {
    var [state, setState] = React.useState("idle")
    var [email, setEmail] = React.useState("")
    var [password, setPassword] = React.useState("")

    if (state === "idle") return (
        <form className="row gy-2 p-3">

            <div className="col-12 text-start">
                <h4>Logga i</h4>
            </div>


            <div className="col-12">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
            </div>


            <div className="col-12">
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Lösenord" />
            </div>

            <div className="col-6 text-start mt-4">
                Har du inte ett konto?
            </div>
            <div className="col-6 d-flex justify-content-end">
                <button type="submit" className="btn btn-primary ms-auto" onClick={OnLogin.bind({ email, password, setState })}>Logga i</button>
            </div>
 
        </form>

    )
}

export default function CreateAccountContainer() {
    return (
        <FormPage>
            <LoginForm/>
        </FormPage>
    )
}
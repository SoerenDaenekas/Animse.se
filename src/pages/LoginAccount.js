import React from 'react';
import './CreateAccount.css';
import FormPage from '../FormPage';
import {useCookies} from 'react-cookie';

function OnLogin(e) {
    e.preventDefault()



    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: this.email, password: this.password })
    };

    fetch("http://api.animse.se:8055/auth/login", requestOptions)
        .then(res => {
            console.log(res)

            if (res.status === 401) {
                this.setError("password wrong")

                return res.json()
            }
 
            if (res.status === 200) {
                this.setState("success")
            }

            return res.json()
        })
        .then((data) => {
            console.log(data)

            if (data.data) {
                this.setCookie("access_token", data.data.access_token)
            }
        })
}

function LoginForm() {
    var [state, setState] = React.useState("idle")
    var [error, setError] = React.useState("")
    var [email, setEmail] = React.useState("")
    var [password, setPassword] = React.useState("")
    const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

    if (state === "success") return (
        <div>
            uwu
        </div>
    )

    if (state === "idle") return (
        <form className="row gy-2 p-3">

            <div className="col-12 text-start">
                <h4>Logga i</h4>
            </div>


            <div className="col-12">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
            </div>


            <div className="col-12">
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="password" placeholder="Lösenord" />
            </div>

            <div className="col-6 text-start mt-4">
                Har du inte ett konto? {error}
            </div>

            <div className="col-6 d-flex justify-content-end">
                <button type="submit" className="btn btn-primary ms-auto" onClick={OnLogin.bind({ email, password, setState, setError, setCookie })}>Logga i</button>
            </div>
 
        </form>

    )
}

export default function CreateLoginPage() {
    return (
        <FormPage>
            <LoginForm/>
        </FormPage>
    )
}
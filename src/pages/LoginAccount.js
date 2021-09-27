import React from 'react'
import './CreateAccount.css'
import FormPage from '../FormPage'
import {login} from '../Authentification'

async function OnLogin(e) {
    e.preventDefault()

    var response = await login(this.email, this.password)

    if (response.status === "success") {
        this.setState("success")
    }

    if (response.status === "failed") {
        this.setError(response.message)
    }
}

function LoginForm() {
    const [state, setState] = React.useState("idle")
    const [error, setError] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
  
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
                <button type="submit" className="btn btn-primary ms-auto" onClick={OnLogin.bind({ email, password, setState, setError })}>Logga i</button>
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
import React from 'react';
import './CreateAccount.css';
import FormPage from '../FormPage';
import { Link, Redirect } from 'react-router-dom'
import { register } from '../Authentification';


async function OnRegister(e) {
    e.preventDefault()

    this.setState("creating")

    var result = await register(this.firstName, this.lastName, this.email, this.password)

    if (result.status === "ok") this.setState("success")
}

function CreateAccountForm() {
    const [state, setState] = React.useState("idle")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    // todo: OkayWithCookies, PrivacyPolicy

    if (state === "idle") return (
        <form className="row gy-2 p-3">

            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/login">Login</Link></li>
                    <li class="breadcrumb-item active">Register</li>
                </ol>
            </nav>

            <div className="col-12 text-start">
                <h4>Skapa ett <red>konto</red> för att:</h4>
                <ul className="ps-5">
                    <li>gilla och följa föreningar</li>
                    <li>markera intresse för träffar</li>
                    <li>skapa föreningar och egna event</li>
                </ul>
            </div>


            <div className="col-6">
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Förnamn" />
            </div>
            <div className="col-6">
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Efternamn" />
            </div>

            <div className="col-12">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
            </div>


            <div className="col-12">
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Lösenord" />
            </div>

            <div className="col-6 d-flex justify-content-end">
                <button type="submit" className="btn btn-primary ms-auto" onClick={OnRegister.bind({ firstName, lastName, email, password, setState })}>Skapa konto</button>
            </div>
 
        </form>
    )

    if (state === "creating") return (
        <div className="row p-3">
            <div className="">
                Creating account...
            </div>
        </div>
    )

    if (state === "success") return (
        <div>
            <Redirect to="/activeEmail"/>
        </div>
    )
}

export default function CreateAccountContainer() {
    return (
        <FormPage>
            <CreateAccountForm/>
        </FormPage>
    )
}
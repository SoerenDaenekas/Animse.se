import React from 'react';

function owo(e) {
    e.preventDefault()

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: this.email, password: this.email })
    };
    
    fetch("http://api.animse.se:8055/users", requestOptions)
    .then(res => {
        if (res.ok) return {}
           

        return res.json()
    })
    .then((data) => {
        console.log(data)
    })    
}

function CreateAccount() {
    var [email, setEmail] = React.useState("")
    var [password, setPassword] = React.useState("")

    return (
        <div className="container">
            <div className="row">
            <div className="col-md"/>
            <form className="col-md-8">
                <div className="form-group row">
                    <label htmlFor="exampleInputEmail1" className="col-sm-2 col-form-label">Email address</label>
                    <div className="col-sm-10">
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="exampleInputPassword1" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary" onClick={owo.bind({email, password})}>Submit</button>
            </form>
            <div className="col-md"/>
            </div>
        </div>
    )
}

export default CreateAccount;
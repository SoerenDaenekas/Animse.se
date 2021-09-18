import React from 'react';

export default function FormPage(props) {
    console.log(props)

    return (
        <div className="pageContainer">
            <div className="pt-5 container">
                <div className="row justify-content-center"> 
                {/* 
                
                todo: there must be a nicer way
                Intended is that this autosizes 
                
                */}
                    <div className="col-xl-7 col-lg-9 col-md-11 col-12 createAccount bg-light"> 
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}
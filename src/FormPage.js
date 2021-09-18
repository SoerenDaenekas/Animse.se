import React from 'react';

export default function FormPage(props) {
    return (
        <div className="pageContainer">
            <div className="pt-5 container">
                <div className="row justify-content-center"> 
                {/* 
                
                todo: there must be a nicer way
                Intended is that this autosizes 
                todo: give minheight, center content
                
                */}
                    <div className="col-xl-7 col-lg-9 col-md-11 col-12 createAccount bg-light"> 
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}
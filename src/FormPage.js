import React from 'react';

export default function FormPage(props) {
    console.log(props)

    return (
        <div className="pageContainer">
            <div className="pt-5 container">
                <div className="row justify-content-center"> 
                    <div className="col-xl-6 col-lg-8 col-md-10 col-12 createAccount bg-light">  {/* todo: there must be a nicer way */}
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}
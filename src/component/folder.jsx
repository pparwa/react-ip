import React from "react";

export default function Folder(props)
{
    return(
        <>
     <div className="parent">
        <div className="cards">
            <img src={props.data.country_flag}></img>
            <span>info</span>
            <div className="container">
                <h2>
                  country: {props.data.country} 
                </h2>
                <p>IP:{props.data.ip}</p>
                <p>company:{props.data.isp}</p>

            </div>
        </div>
    </div>
        </>
    )
}
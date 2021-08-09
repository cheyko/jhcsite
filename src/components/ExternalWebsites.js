import React from "react";

const ExternalWebsites = props => {
    return (
        <>
            <article className="message is-link is-size-5">
                <div className="message-header">
                    <p> External Links </p>
                </div>
                <div className="message-body" style={{textAlign:"justify"}}>
                    <ul>
                        <li> <strong> <a href="">Passport Services</a> </strong> </li>
                        <li> <strong> <a href="">Citizen Application - Marriage</a> </strong> </li>
                        <li> <strong> <a href="">Covid Updates and Information</a> </strong> </li>
                        <li> <strong> <a href="">Returning Residents</a> </strong> </li>
                    </ul>
                </div>
            </article>
        </>
    )
}
export default ExternalWebsites;
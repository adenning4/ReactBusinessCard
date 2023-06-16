import React from "react"

export default function Info() {
    return (
        <main className="info">
            <img src="./geo-happy.png" alt="profile pic" />
            <h1 className="profile-name">Geovanny</h1>
            <h2 className="profile-occupation">The Goodest Boy</h2>
            <a className="profile-webpage" href="#" target="_blank">geovanny.website</a>
            <div className="social-buttons-container">
                <button className="social-button envelope-button"><i className="fa-solid fa-envelope"></i> Email</button>
                <button className="social-button linkedin-button"><i className="fa-brands fa-linkedin"></i> LinkedIn</button>
            </div>
        </main>
    )
}
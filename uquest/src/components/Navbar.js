import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <div className="nav">
            <div class="leftNav">
                <Link to="/leaderboard">
                    <img id="logo" src="/images/Logo.png" alt="logo" />
                </Link>
                <Link to="/leaderboard">
                    <p id="title">UQuest</p>
                </Link>
            </div>
            <div id="spacer"></div>
            <div class="page-container">
                <Link to="/leaderboard" class="page">Leaderboard</Link>
                <Link to="/house" class="page">House</Link>
                <Link to="/league" class="page">League</Link>
            </div>
            <img id="logo" src="/images/Logo.png" alt="logo" />
        </div>

    )


}
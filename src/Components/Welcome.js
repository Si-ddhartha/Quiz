import React from "react";
import './Welcome.css';
import { Link } from "react-router-dom";

export default function Welcome(){
    return(
        <div className="welcome">
            <h1 className="welcome-header">Welcome</h1>
            <h3 className="welcome-question">Are you ready to play a short and fun quiz game?</h3>
            <Link to="/quiz" className="link"> 
            <button className="welcome-button">
                Yeah, lets play!!! 
            </button>
            </Link>
        </div>
    )
}
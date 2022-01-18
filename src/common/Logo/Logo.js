import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Logo.scss"

export default function Logo() {
    const navigate = useNavigate()
    return (
        <div>
            <h1 className="site-logo" onClick={() => navigate("/")} >
                <span className="small">The</span>
                <span className="large">Siren</span>
            </h1>
        </div>
    )
}

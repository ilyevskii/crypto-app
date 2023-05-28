import React from 'react';
import {useNavigate} from "react-router-dom";

export function ErrorPage() {

    const navigate = useNavigate();

    return (
        <main className="container error">
            <h1 style={{fontSize: "4em", textAlign: "center", marginTop: "3em"}}>404</h1>
            <p style={{fontSize: "2em", textAlign: "center", marginTop: "-1em"}}>Sorry, page not found :(</p>
            <button
                className="styled-btn"
                onClick={() => navigate("/?page=1")}
                style={{fontSize: "1.5em"}}
            >
                Homepage
            </button>
        </main>
    );
}

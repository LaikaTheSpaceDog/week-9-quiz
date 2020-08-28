import React from "react";

import { Link } from "react-router-dom";

const LinkList = () => (
    <ul className="nav">
        <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/multiplier">Multiplier</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/even-clicks">Even Clicks</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/count-by">Count By</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/hide-me">Hide Me</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/min-length">Minimum Length</Link>
        </li>
    </ul>
);

export default LinkList;
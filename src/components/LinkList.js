import React from "react";
import { Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

const LinkList = () => (
    <Nav>
        <Nav.Item>
            <Link className="nav-link" to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
            <Link className="nav-link" to="/multiplier">Multiplier</Link>
        </Nav.Item>
        <Nav.Item>
            <Link className="nav-link" to="/even-clicks">Even Clicks</Link>
        </Nav.Item>
        <Nav.Item>
            <Link className="nav-link" to="/count-by">Count By</Link>
        </Nav.Item>
        <Nav.Item>
            <Link className="nav-link" to="/hide-me">Hide Me</Link>
        </Nav.Item>
        <Nav.Item>
            <Link className="nav-link" to="/min-length">Minimum Length</Link>
        </Nav.Item>
    </Nav>
);

export default LinkList;
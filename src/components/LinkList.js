import React from "react";
import { Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

let linkArray = [ {title:"Home" , path: "/"}, 
                  {title: "Multiplier", path: "/multiplier"},
                  {title: "Even Clicks", path: "/even-clicks"},
                  {title: "Count by", path: "/count-by"},
                  {title: "Hide Me", path: "/hide-me"},
                  {title: "Minimum Length", path: "/min-length"}
                ]

const LinkList = () => (
    <Nav>
        {linkArray.map((x, i) => (
            <Nav.Item key={i}>
                <Link className="nav-link" to={x.path}>{ x.title }</Link>
            </Nav.Item>
        ))}
    </Nav>
);

export default LinkList;
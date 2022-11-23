import React from "react";
import { Link } from "react-router-dom";
import {  ListGroup } from "reactstrap";

export const Menu = ()=>{
    return (

         <ListGroup>
            <Link className="list-group-item list-group-item-action" tag= "a" to="/" action> Home    </Link>
            <Link className="list-group-item list-group-item-action" tag= "a" to="/add-patients" action> Add Patients    </Link>
            <Link className="list-group-item list-group-item-action" tag= "a" to="/view-patients" action> View Patients    </Link >
            <Link className="list-group-item list-group-item-action" tag= "a" to="#!" action> About Us    </Link>
            <Link className="list-group-item list-group-item-action" tag= "a" to="#!" action> Contact    </Link>
    
            {/* <Link className="list-group-item list-group-item-action bg-muted" tag= "a" to="/login" action> Login    </Link>
            <Link className="list-group-item list-group-item-action bg-muted" tag= "a" to="/register" action> Sign Up    </Link> */}

         </ListGroup>
    )
};
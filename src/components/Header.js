import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";


export function Header(){
    return(
        <div>
            <Card className=" bg-warning">
                <CardBody>
                <h1 className="display-3 text-center my-3">Hospital Management System</h1>
                <Link className="list-group-item list-group-item-action bg-muted" tag= "a" to="/login" action> Login    </Link>
            <Link className="list-group-item list-group-item-action bg-muted" tag= "a" to="/register" action> Sign Up    </Link>

                </CardBody>
            </Card>
            
        </div>
    )
}
;
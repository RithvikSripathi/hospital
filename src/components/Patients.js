import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { Card,CardBody,CardTitle,CardSubtitle,CardText,Button,Container } from "reactstrap";
import base_url from "../api/bootapi";

export const Patients = ({patient,update}) => {
    const deletePatient=(id)=> {
        axios.delete(`${base_url}/patients/${id}`).then(
            (response)=> {

                toast.success("Patient deleted");
                update(id);
            },(error)=> {

                toast.error ("Patient not deleted")
            }
        );
    }; 
    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{patient.name}</CardSubtitle>
                <CardTitle>{patient.email}</CardTitle>
                <CardText>The patient is alive</CardText>
                <Container className="text-center">
                    <Button color="warning ml"> Update</Button>
                    <Button color="danger " onClick={()=>{
                        deletePatient(patient.id);
                    }}> Delete</Button>

                </Container>
            </CardBody>
        </Card>
    )
};
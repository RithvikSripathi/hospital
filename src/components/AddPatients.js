import axios from "axios";
import React, {Fragment, useEffect, useState} from "react";
import { toast } from "react-toastify";

import { Button,  Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";

export const AddPatients = () => {
  useEffect(()=>{
    document.title="Add Patients"
},[]);
   const [patient,setPatient] = useState({});

   const handleForm = (e)=> {
    console.log(patient);
    postDatatoServer(patient);
    e.preventDefault();
   };

   const postDatatoServer = (data) => {
    axios.post(`${base_url}/patients`,data).then((response)=>{

      console.log(response);
      console.log("success");
      toast.success("Patient has been added");
      setPatient({id:"", name:"",email:""});

    },(error)=>{

      console.log(error);
      console.log('error'); 
      toast.error("Error"); 
    });
   };


       return <Fragment>
        <h1 className="text-center my-3"> Fill in Patient Details</h1>
        <Form onSubmit={handleForm}>

        <FormGroup>
                <label for= "id">Patient Id</label>
                <Input type="text"
                placeholder="Enter your ID here"
                name="id"
                id="id"
                onChange={(e) =>{
                  setPatient({...patient,id:e.target.value})
                }}
                />
            </FormGroup>

            <FormGroup>
                <label for= "name">Patient Name</label>
                <Input type="text"
                placeholder="Enter your name here"
                name="name"
                id="name"
                onChange={(e) =>{
                  setPatient({...patient,name:e.target.value})
                }}
                />
            </FormGroup>

            <FormGroup>
                <label for= "email">Patient email</label>
                <Input type="email"
                placeholder="Enter your email here"
                name="email"
                id="email"
                onChange={(e) =>{
                  setPatient({...patient,email:e.target.value})
                }}
                />
            </FormGroup>
            {/* <FormGroup>
                 <label for="date"> Date of appointment </label>
               <Input
                  id="date"
                  name="date"
                  placeholder="Select the Date"
                  type="date"
                      />
                </FormGroup> */}
                
                {/* <FormGroup
    row
    tag="fieldset"
  ></FormGroup>
                <legend className="col-form-label col-sm-2">
      Gender
    </legend>
    <Col sm={10}>
      <FormGroup check>
        <Input
          name="radio2"
          type="radio"
        />
        
        <label check className="text-left">
          Male
        </label>
      </FormGroup> */}
      {/* <FormGroup check>
        <Input
          name="radio2"
          type="radio"
        />
        
        <label check>
          Female
        </label>
        
      </FormGroup> */}
      {/* </Col> */}
      <Container className="text-center">
        <Button type="submit" color="success"> Add Patient</Button>
        <Button type="reset"onClick={()=> {
          setPatient({id:"", name:"",email:""});
        }} color="warning ml-2">Clear</Button>
      </Container>
            </Form>

    </Fragment>;
};
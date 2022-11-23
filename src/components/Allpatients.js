import React, { useState,useEffect } from "react";
import { Patients } from "./Patients";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


 export const Allpatients = () => {
    useEffect(()=>{
        document.title="All Patients"
    },[]);

    //Function To Call Server
    const getAllPatientsFromServer = ()=>{
        axios.get(`${base_url}/patients`).then(
            (response) =>{
                console.log(response);
                toast.success("Patient has been added");
                setPatients(response.data)
            },
            (error) =>{
                console.log(error);
                toast.error("Something went wrong");

            }
        );
    };
    
    //Calling Loading Patient Function
    useEffect(()=>{
        getAllPatientsFromServer();
    },[]);

    const[patients,setPatients]= useState([]);

    const updatePatients=(id)=> {
        setPatients(patients.filter((c) => c.id!==id));
    }
    return(
        <div>
            <h1>All Patients</h1>
            <p>List of all patients</p>

            {
                patients.length > 0 
                ? patients.map((item) =>( <Patients key={item.id} patient={item} update= {updatePatients}/>)
                ): "No Patients"
            }
        </div>
       
    )
};
import React, { useEffect } from "react";
import { Button,Container } from 'reactstrap';



export function Home(){
    useEffect(()=>{
        document.title="Home"
    },[]);
    return(
        
        <div className="text-centre">
            
           
            <h1 >Hospital Management System</h1>
            <p>from this you can book an appointment for</p>
            <Container>
                <Button color="primary">Submit</Button>
            </Container>
           
            
        </div>
    )
}
;
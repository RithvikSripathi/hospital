import React from 'react';
import './App.css';
import {Header} from './components/Header';
// import {Button} from "reactstrap";
import {ToastContainer, } from 'react-toastify';

import { Col, Container, Row } from 'reactstrap';
import { Menu } from './components/Menu';
import { Home } from './components/Home';
import {BrowserRouter as Router,  Route, Routes} from "react-router-dom";
import { AddPatients } from './components/AddPatients';
import { Allpatients } from './components/Allpatients';
// import { Patients } from './components/Patients';
import Login from './components/Login';
import Register from './components/Register';


function App() {



  return (
    
    <div className="App">
      <Router>
      <ToastContainer/>
      <Header/>
    <Container>
      <Row>
        <Col md={4}>
          <Menu/>
        </Col>
        <Col md={8}>
          <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/add-patients' element={<AddPatients/>} />
          <Route path='/view-patients' element={<Allpatients/>} />
          {/* <Route path='/about-us' element={<AboutUs/>} />
          <Route path='/contact' element={<Contact/>} /> */}
          <Route path="/login" element={<Login/>}/>

          <Route path="/register" element={<Register/>}/>
          </Routes>

        </Col>
      </Row>
    </Container>
    </Router>
 
  
    </div>
  );
}

export default App;

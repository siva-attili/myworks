import React, { useState,useEffect } from "react";
import { Navbar, Nav, Row } from "react-bootstrap";
import "./Header.css";
export default function Header() {
  const[header,setPage]=useState([]);
useEffect(()=>{
  fetch('http://localhost:3000/header')
  .then(response=>response.json())
  .then((res)=>{
    setPage(res)
  })
})
  return (
    <div>
      <header className="container-fluid bg-light">
        <Navbar bg="light" expand="lg" className="container">
            <Navbar.Brand to="#home">
              <img src={require("../../../images/logo-pc.png")} />
            </Navbar.Brand>
            <Navbar.Brand to="#home" className="mr-auto">
              <div className="pride">Pride</div>
              <p className="int-school">International</p>
              <p className="int-school school">School</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
              {header.map(head=>(
                 <div key={head.id} className="pc-menu pc-menu0">
                 <Nav.Link href={head.page} className="text-white">
                  {head.page}
                 </Nav.Link>
               </div>
              ))}
              </Nav>
             </Navbar.Collapse>
          </Navbar>
        
      </header>
    </div>
  );
}

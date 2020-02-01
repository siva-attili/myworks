import React from 'react';
import{Row} from 'react-bootstrap';
import Address from "../Common/Address/Address";
import ContactForm from './ContactForm';
export default function Contact(){
    return(<div className="container pc-bg1">
      <h1 className="pc-c1">Contact</h1>
    <Row>
     <div className="col-md-6">
     <Address/>
    </div>   
    <div className="col-md-6">
    <ContactForm/>
    </div>   
    </Row>
    </div>)
}
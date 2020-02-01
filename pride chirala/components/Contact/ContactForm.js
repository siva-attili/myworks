import React, {useState,useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import './Form.css';

export default function ContactForm() {
  const[form,setForm]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/form')
    .then(response=>response.json())
    .then((res)=>{
      setForm(res)
    })
  })
  return (
    <Form className="m-2">
    {form.map(fdata=>(
    <Form.Group>
        <Form.Row>
          <Form.Label className={fdata.lclass}>{fdata.label}</Form.Label>
          <Form.Control
            className={fdata.fctrl}
            type={fdata.type}
            placeholder={fdata.placeholder}
            as={fdata.as}
            row={fdata.row}
          />
        </Form.Row>
      </Form.Group>))}
      
    <Button className="btn btn-light offset-sm-2 text-left">submit</Button>
    </Form>
  );
}

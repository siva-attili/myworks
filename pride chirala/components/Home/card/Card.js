import React,{useState,useEffect} from "react";
import { Row, Card } from "react-bootstrap";
import "./Card.css";
export default function CardSection() {
  const[card,setCard]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/card')
    .then((response)=>response.json())
    .then((res)=>{
      setCard(res)
    })
  })
  return (
    <Row className="m-2" >
    {card.map(cards=>(
 <Card key={cards.id} className={`pc-vmv col-md-4 pc-${cards.img} m-1 w-100 `}>
 <Card.Body>
   <img src={require(`../../../images/i-${cards.img}.png`)} />
   <Card.Title>{cards.title}</Card.Title>
   <Card.Text>{cards.text}</Card.Text>
 </Card.Body>
</Card>
    ))}
    </Row>                      
  );
}

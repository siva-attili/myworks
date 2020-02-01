import React, { useState,useEffect } from "react";
import "./About.css";
import { Row } from "react-bootstrap";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  const [facilities, setFacilities] = useState([]);
  const [part,setPart]=useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/part1")
      .then(response => response.json())
      .then((res) => {
        setFacilities(res);
      });
  });
  useEffect(() => {
    fetch("http://localhost:3000/part2")
      .then(response => response.json())
      .then(res => {
        setPart(res);
      });
  });
  return (
    <div className="container pc-bg1 pb-1">
      <h1>About</h1>
      <p className="pc-p1">
        Welcome to <span className="pc-c2">Pride International School</span>,
        Chirala. A unique school with an ideology to prepare our students to
        meet the demands of an increasingly technological world, indeed if it is
        to be effective at all, it must integrate technology into the CBSE
        academic curriculum. Our keen focus on our students, commitment to
        quality and dedication to continuous improvement empowers our students
        to handle whatever life may throw at them. Our greatest strength lies in
        our commitment to community. Crafting together of a shared
        <i className="pc-c6">vision</i> –
        <strong className="pc-c4">
          “To be a model of excellence for solving complex educational problems”
        </strong>
      </p>
      <Row>
        <div className="col-md-6">
          <h3 className="pc-c6"> Facilities</h3>
          {facilities.map(p => (
            <p>
              <FontAwesomeIcon
                key={p.id}
                icon={faAngleRight}
                className={p.title1}
              />
              <span className={p.title2}>{p.text} </span>
            </p>
          ))}
        </div>
        <div className="col-md-6">
          <h3 className="pc-c6"> What We Do</h3>
          {part.map(d => (
            <p>
              <FontAwesomeIcon
                key={d.id}
                icon={faAngleRight}
                className={d.title1}
              />
              <span className={d.title2}>{d.text} </span>
            </p>
          ))}
        </div>
      </Row>
    </div>
  );
}

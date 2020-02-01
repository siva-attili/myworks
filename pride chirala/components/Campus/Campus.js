import React from 'react';
import './Campus.css';
export default function Campus(){
    return( <div className="container pc-bg1 pb-1">
    <h1 className="pc-c1">Campus</h1>
    <p className="pc-p1">
      <a href="#cvraman" title="Notable Indian Nobel Laureate for Physics, known for discovery of Raman Effect" id='cv-raman'>Sir CV Raman</a> Campus, is our state-of-the-art campus located in Karamchedu 
      Road, Chirala with a huge spread across 4.5 Acres. One of the best international schools in Prakasm District,
       Andhra Pradesh.
    </p>
    <p className="pc-p1">
      The curriculum followed here is the CBSE and CBSE-I from Grade-I to Grade-XII. The world-class teaching faculty at 
      Pride International School offers a progressive teaching experience to the students, creating strong individuals.
    </p>
    <p className="pc-p1">
      State-of-art Indoor and Outdoor Amenities – Cricket Ground, Soccer Ground, Race Court, Tennis Courts, Swimming Pool,
       Table Tennis, Amphitheatre, Digital Auditorium, World-class Labs, Resource Centre, World-class Library with 
       wide collection of books, Audio and Visual Rooms.
    </p>
    <h3 className="pc-c2">Campus Outlook</h3>
    <img src={require("../../images/pc-campus.jpg")} className="img-fluid img-round" alt="Placeholder" />
    <hr />
</div>)
}
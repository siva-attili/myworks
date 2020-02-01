import React,{useState,useEffect} from 'react';

export default function Exp4(){
    const[images,setImage]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/images")
        .then((response)=>response.json())
        .then((res)=>{
            setImage(res)
        })
    })
    return(<div>
        {images.map(img=>(
            <img key={img.id} src={require(`../images/carousel-${img.pic}.jpg`)} />
        ))}
    </div>)
}
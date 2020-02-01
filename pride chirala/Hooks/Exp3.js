import React, {useState, useEffect} from 'react';

export default function Exp3(){
const [name,setName]=useState(null);
useEffect(()=>{
    fetch('http://localhost:3003/data')
    .then((response)=>response.json())
    .then((res)=>{
setName(res.name)
    })
    .catch((error)=>{
        console.log(error)
    });
})
return(<div>
    <p>{name}</p>
</div>)
}
import React,{useState} from 'react';
export default function Exp2(){
    const[images]=useState([{id:1},{id:2},{id:3},{id:4},{id:0}])
return(<div>
  <section>
{images.map(img=>(
  <img key={img.id} src={require(`../images/carousel-${img.id}.jpg`)} />
))}
  </section>
</div>)
}
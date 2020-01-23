import React, { useState, useEffect } from "react";
export default function GetExp() {
  const [images, setImage] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/images", {
      method: "GET ",
      body: JSON.stringify({ id: id, pic: pic }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(result => {
        setImage(result);
      });
  });
  return (
    <div>
      {images.map((img, index) => {
        <p key={index}>
          {img.id}, {img.pic}
        </p>;
      })}
    </div>
  );
}

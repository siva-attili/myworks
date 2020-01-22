import React, { useState } from "react";
export default function MapExp() {
  const [team] = useState([
    { player: "Msd" },
    { player: "Kohli" },
    { player: "Rohit" },
    { player: "KL Rahul" },
    { player: "Jaddu" }
  ]);
  return (
    <div>
      <h3>Best Players In India</h3>
      <section>
        {team.map((plr, index) => (
          <p id={index}>{plr.player}</p>
        ))}
      </section>
    </div>
  );
}

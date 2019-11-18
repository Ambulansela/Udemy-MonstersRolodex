import React from "react";

import "./card.styles.css";

export const Card = props => (
  <div className="card-container">
    <img
      alt="monster"
      src={
        //alternativ om andra länken inte fungerar
        //"https://robohash.org/" + props.monster.id + "?set=set2&size=180x180"
        //länk med bacticks och inte '""
        `https://robohash.org/${props.monster.id}?set=set2&size=180x180`
      }
    />
    <h2> {props.monster.name} </h2>
    <p> {props.monster.email} </p>
  </div>
);

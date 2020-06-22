import React from "react";
import "./card.css";

const Card = (props) => (
  <div className="card" onClick={() => props.clickedImage(props.id)}>
    <div className="img-container">
      <img alt={props.variety} src={props.image} />
      <div className="overlay">
        <div className="text">
          {props.variety}
          <br />
        </div>
      </div>
    </div>
  </div>
);

export default Card;

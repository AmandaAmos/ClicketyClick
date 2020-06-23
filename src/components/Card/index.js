import React from "react";
import "./card.css";


const Card = (props) => {
  return (
  <div className="card" onClick={() => props.clickedImage(props.id)}>
    <div className="img-container">
      <img alt={props.variety} src={process.env.PUBLIC_URL + props.img} />
      <div className="overlay">
        <div className="text">
          {props.variety}
          <br />
        </div>
      </div>
    </div>
  </div>
)};
  //render() {
   // return (
   // <div className="card">
   //   <img alt="" src={props.img} />
   // </div>

   // );
 // };

export default Card;

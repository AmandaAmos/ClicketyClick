import React from "react";
import "./score.css";

function Score(props) {
  return (
    <header className="score">
      <div className="col-md-12 col-center">
        
          <h4>{props.title}</h4>
        <div className="col-md-9 col-right">
         <h6>High Score {props.score}</h6>
         </div>
        <div className="col-md-9 col-right">
          <h6>Current Score: {props.topScore}</h6>
        </div>
      </div>
      <div className="row" id="tagline">
        <div className="col-md-12 col-center">
          <h6>Stop and smell the Roses, but only click on each variety once!</h6>
        </div>
      </div>
    </header>
  );
}

export default Score;

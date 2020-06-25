import React, { Component } from "react";
//import { Route } from "react-dom";
import cards from "./cards.json";
import Card from "./components/Card";
import Score from "./components/Score";

//shuffle function
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    cards,
    score: 0,
    topScore: 0,
    showAlert: 0,
    showSuccess: 0,
    clickedroses: [],
  };

  clickedImage = (id) => {
    let clickedroses = this.state.clickedroses;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState({
      showAlert: 0,
    });

    if (clickedroses.indexOf(id) === -1) {
      //push id into the array to be stored
      clickedroses.push(id);
      console.log(clickedroses);
      //run the score function
      this.handleIncrement();
      //reshuffle function after each click
      this.makeShuffle();
    } else if (this.state.score === 12) {
      //alert player wins
      this.setState({
        showSuccess: 1,
        score: 0,
        clickedroses: [],
      });
    } else {
      //alert player of loss
      this.setState({
        score: 0,
        clickedroses: [],
      });
      console.log("Duplicate");
      this.setState({
        showAlert: 1,
      });
    }
    if (score > topScore) {
      this.setState({
        topScore: score,
      });
    }
  };
  //handleIncrement increases this.state.score +1
  handleIncrement = () => {
    //setState updates components states
    this.setState({ score: this.state.score + 1 });
  };

  //shuffle images
  makeShuffle = () => {
    this.setState({ roses: shuffle(cards) });
  };

  //render time!
  render() {
    return (
      <div className="container">
        <Score
          title="Roses clicky Game"
          score={this.state.score}
          topScore={this.state.topScore}
        />

        <div className="row">
          {this.state.cards.map((cards) => (
            <Card
              key={cards.id}
              id={cards.id}
              variety={cards.variety}
              img={cards.image}
              clickedImage={this.clickedImage}
            />
          ))}

          <div
            className="alert alert-dark"
            style={{ opacity: this.state.showAlert }}
          >
            You've already smelled this rose, choose again.
          </div>
          <div
            className="alert alert-success"
            style={{ opacity: this.state.showSuccess }}
          >
            Congratulations! Click to play again.
          </div>
        </div>
      </div>
    );
  }
}
export default App;

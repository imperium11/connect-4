import React, { Component } from "react";
import ReactDOM from "react-dom";
import Column from "./Column.jsx";
import winortie from "./helper/winortie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: 1,
      counter: 0,
      column0: [0, 0, 0, 0, 0, 0, 0, 0],
      column1: [0, 0, 0, 0, 0, 0, 0, 0],
      column2: [0, 0, 0, 0, 0, 0, 0, 0],
      column3: [0, 0, 0, 0, 0, 0, 0, 0],
      column4: [0, 0, 0, 0, 0, 0, 0, 0],
      column5: [0, 0, 0, 0, 0, 0, 0, 0],
      column6: [0, 0, 0, 0, 0, 0, 0, 0],
      column7: [0, 0, 0, 0, 0, 0, 0, 0],
      numbers: [0, 1, 2, 3, 4, 5, 6, 7]
    };
    this.winortie = winortie.bind(this);
  }

  handleColumnClick(column, y) {
    let state = {};
    let x;
    state[column] = this.state[column];

    for (let i = 7; i >= 0; i--) {
      if (state[column][i] === 0) {
        x = i;
        state.counter = this.state.counter + 1;
        state[column][i] = this.state.play;
        i = -1;
      }
    }

    if (this.state.play === 1) {
      state.play = 3;
    } else {
      state.play = 1;
    }

    this.setState(prevState => {
      return state;
    });

    this.winortie(x, y);

    if (this.state.counter === 63) {
      alert('Tie game...');
    }
  }

  render() {
    return (
      <div>
        <div id="container">
          <h1 style={{ alignSelf: "center" }}>Connect Four</h1>
          <ul id="board">
            {this.state.numbers.map(number => (
              <Column
                key={number}
                numbers={this.state.numbers}
                columnState={this.state["column" + number]}
                yColumn={"column" + number}
                y={number}
                handleColumnClick={this.handleColumnClick.bind(this)}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

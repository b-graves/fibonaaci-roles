import { useState } from "react";
import "./App.css";

function App() {
  // the squares variable stores a list of rows of squares storing the colour of the square
  // e.g. a 3x3 grid might look like:
  //
  // [
  //    ["red", "white", "yellow"],
  //    ["black", "blue", "white"],
  //    ["white", "black", "red"],
  // ]
  const [squares, setSquares] = useState([]);

  const fibonacciNumber = () => {
    // this function gives us a random fibonacci number from 0, 1, 1, 2, 3, 5
    const numbers = [0, 1, 1, 2, 3, 5];

    const random = Math.floor(Math.random() * numbers.length);

    return numbers[random];
  };

  const getColor = () => {
    // this function gives us a colour based on a random fibonacci colour
    switch (fibonacciNumber()) {
      case 0:
        return "white";
      case 1:
        return "black";
      case 2:
        return "blue";
      case 3:
        return "red";
      case 5:
        return "yellow";
    }
  };

  const createSquares = (number) => {
    // this function creates as many squares as we ask for populated with a colour, e.g. createSquares(5) with gives us a list of five squares like ["red", "white", "yellow", "blue", "yellow"]
    let squares = [];
    for (let i = 0; i < number; i++) {
      squares.push(getColor());
    }
    return squares;
  };

  const rollDice = () => {
    // this function happens when we roll the dice, we want to increase the number of rows and columns by 1

    // first add a new square to the end of each row to increase the number of columns by one
    let newSquares = squares.map((row) => row.concat(createSquares(1)));

    // then add another row to the bottom of the grid to increase the number of rows by 1
    let rowLength;
    if (newSquares.length > 0) {
      rowLength = newSquares[0].length;
    } else {
      rowLength = 1;
    }
    newSquares.push(createSquares(rowLength));

    // update our squares variable
    setSquares(newSquares);
  };

  return (
    <div className="App">
      <div className="grid">
        {squares.length ? (
          squares.map((row) => (
            <div className="row">
              {row.map((square) => (
                <div
                  className="square"
                  style={{ backgroundColor: square }}
                ></div>
              ))}
            </div>
          ))
        ) : (
          <div className="instruction">PRESS ROLL TO START </div>
        )}
      </div>
      <div className="controls">
        <button onClick={rollDice} className="roll-button">
          ROLL
        </button>
      </div>
    </div>
  );
}

export default App;

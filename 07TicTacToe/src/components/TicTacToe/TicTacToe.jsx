import React from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>TicTacToe</h1>
      </div>
      <div className="board">
        <div className="row1">
          {[0, 1, 2].map((num) => (
            <div key={num} className="boxes">
              {/* Placeholder for images */}
            </div>
          ))}
        </div>
        <div className="row2">
          {[3, 4, 5].map((num) => (
            <div key={num} className="boxes">
              {/* Placeholder for images */}
            </div>
          ))}
        </div>
        <div className="row3">
          {[6, 7, 8].map((num) => (
            <div key={num} className="boxes">
              {/* Placeholder for images */}
            </div>
          ))}
        </div>
      </div>
      <div className="btn">
        <button className="button" type="button">
          New Game
        </button>
        <button className="button" type="button">
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;

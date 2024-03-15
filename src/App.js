import React, { useState } from "react";
import milkBounce from "./milk_bounce.webp";
import bubuDudu from "./bubu-dudu-kiss.gif";

import "./App.scss";

const App = () => {
  const [clickedYes, setClickedYes] = useState(false);
  const [index, setIndex] = useState(0);
  const [size, setSize] = useState({
    width: 100,
    height: 50,
    fontSize: 16,
  });

  const arrayOfRejections = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again",
    "Last chance!",
    "You might regret this",
    "Give it another thought",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You've breaking my heart :'(",
  ];

  const resizeHandler = () => {};

  const onRedClickHandler = () => {
    if (!(index >= arrayOfRejections.length - 1)) {
      setSize((prev) => Object.fromEntries(
        Object.entries(prev).map(([key, value]) => [key, value * 1.2])));
      setIndex((prev) => prev + 1);
    }
  };

  const onGreenClickHandler = () => {
    setClickedYes(true);
  };

  return (
    <div className="App">
      {clickedYes ? (
        <>
          <header>Ok yayyy!!!</header>
          <img src={bubuDudu} alt="bubududu"></img>
        </>
      ) : (
        <>
          <header>Be my valentine?</header>
          <img src={milkBounce} alt="milk mocha" />
          <div className="buttons-container">
            <button
              className="button button-green"
              style={{
                width: size.width,
                height: size.height,
                fontSize: size.fontSize,
              }}
              onClick={() => onGreenClickHandler()}
            >
              Yes
            </button>
            <button className="button button-red" onClick={() => onRedClickHandler()}>{arrayOfRejections[index]}</button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;

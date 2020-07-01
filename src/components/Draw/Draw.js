import React, { useState, useEffect } from "react";
import data from "../../data";

import "./Draw.scss";

const Draw = () => {
  const [numbers, setNumbers] = useState([]);
  const [values, setValues] = useState([]);
  const [lastNumber, setLastNumber] = useState();

  const getRandomNumbers = (min = 0, max = data.length) => {
    const number = Math.floor(Math.random() * (max - min)) + min;
    if (!numbers.includes(number)) {
      setNumbers([...numbers, number]);
      setLastNumber(number);

      setValues(
        [...numbers, number]
          .sort(function (a, b) {
            return a - b;
          })
          .map((e) => {
            return { num: e + 1, val: data[e] };
          })
      );
    } else {
      if (numbers.length !== data.length - 1) getRandomNumbers(0, data.length);
      else alert("Game over");
    }

    return null;
  };

  return (
    <div className="draw">
      <div>
        <h1>
          {lastNumber
            ? `${lastNumber + 1}. ${data[lastNumber]}`
            : "Atmiya Housie"}
        </h1>
        <button onClick={() => getRandomNumbers(0, data.length)}>Draw</button>
        <ul>
          {values.map(({ num, val }) => (
            <li key={num}>
              {num}. {val}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Draw;

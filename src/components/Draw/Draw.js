import React, { useState } from "react";
import data from "../../data";

import "./Draw.css";

const Draw = () => {
  const [numbers, setNumbers] = useState([]);
  const [values, setValues] = useState([]);
  const [lastNumber, setLastNumber] = useState();

  const getRandomNumbers = (min = 0, max = data.length) => {
    const number = Math.floor(Math.random() * (max - min)) + min;
    if (!numbers.includes(number)) {
      setNumbers([...numbers, number]);
      setLastNumber(number);

      setValues([...numbers, number].map((e) => data[e]).sort());
    }
    return null;
  };

  return (
    <div className="draw">
      <h1>{lastNumber ? data[lastNumber] : "Atmiya Housie"}</h1>
      <button onClick={() => getRandomNumbers(0, data.length)}>Draw</button>
      <ul>
        {values.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Draw;

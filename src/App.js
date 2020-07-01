import React, { useState } from "react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

import Ticket from "./components/Ticket/Ticket";

import "./styles.css";

import data from "./data";

// returns 16 numbers between 0 to 99 if data length is 100
const getRandomNumbers = (max = data.length, min = 0) => {
  const numbers = [];

  while (numbers.length !== 15) {
    const number = Math.floor(Math.random() * (max - min)) + min;
    if (!numbers.includes(number)) numbers.push(number);
  }
  return numbers;
};

const formatDate = (date = new Date()) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.getMonth().toString().padStart(2, "0");
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours.toString().padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
};

const handleDownload = () => {
  const el = document.querySelector("#ticket-table");

  el.style.overflow = "visible";

  html2canvas(el, {
    width: el.scrollWidth,
    height: el.scrollHeight,
  }).then((canvas) => {
    canvas.toBlob((blob) => {
      saveAs(blob, "atmiya-housie.png");
      el.style.overflow = "auto";
    });
  });
};

function App() {
  const [name, setName] = useState("");
  const [ticket, setTicket] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const values = [];
    getRandomNumbers().forEach((number) => values.push(data[number]));

    setTicket({
      name: name
        .split(" ")
        .map((e) => e.charAt(0).toUpperCase() + e.slice(1, e.length))
        .join(" "), // capitalize name
      timestamp: formatDate(),
      values,
    });
  };

  return (
    <div className="App">
      <h1>Atmiya Housie</h1>
      {ticket ? (
        <>
          <Ticket ticket={ticket} />
          <button type="button" onClick={handleDownload}>
            Download
          </button>{" "}
          <button type="button" onClick={handleFormSubmit}>
            Refresh
          </button>{" "}
          <button
            type="button"
            onClick={() => {
              setName();
              setTicket();
            }}
          >
            Restart
          </button>
        </>
      ) : (
        <>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input type="submit" value="Submit" />
          </form>
        </>
      )}
    </div>
  );
}

export default App;

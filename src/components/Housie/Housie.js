import React, { useState } from "react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { getTicketsNumber } from "../../utils/randNum";

import Ticket from "./Ticket/Ticket";

import "./Housie.scss";

import data from "../../data";

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
  const el = document.querySelector("table");

  html2canvas(el, {
    width: el.scrollWidth,
    height: el.scrollHeight,
  }).then((canvas) => {
    canvas.toBlob((blob) => {
      saveAs(blob, "atmiya-housie.png");
    });
  });
};

const Housie = () => {
  const [name, setName] = useState("");
  const [ticket, setTicket] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const values = [];
    getTicketsNumber(0, data.length).forEach((number) =>
      values.push(data[number])
    );

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
    <div className="housie">
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
            <div>
              <input
                type="text"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Housie;

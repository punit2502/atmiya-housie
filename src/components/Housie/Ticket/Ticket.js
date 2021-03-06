import React from "react";
import "./Ticket.scss";

const Ticket = ({ ticket }) => {
  const { name, timestamp, values } = ticket;

  return (
    <div id="ticket-table">
      <table>
        <thead>
          <tr>
            <th colSpan="5">
              <div className="heading">
                <span>{name}</span> <span> Atmiya Housie</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {values.slice(0, 5).map(({ value, number }) => (
              <td key={value}>
                {value}
                <span>{number}</span>
              </td>
            ))}
          </tr>
          <tr>
            {values.slice(5, 10).map(({ value, number }) => (
              <td key={value}>
                {value}
                <span>{number}</span>
              </td>
            ))}
          </tr>
          <tr>
            {values.slice(10, 15).map(({ value, number }) => (
              <td key={value}>
                {value}
                <span>{number}</span>
              </td>
            ))}
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="5">Created On: {timestamp}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Ticket;

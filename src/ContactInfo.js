import React from "react";
import "./Examples.css";

export default ({ phone, mail }) => {
  return (
    <div className="card">
      <h1>Контакты:</h1>
      <p>Телефон: {phone}</p>
      <p>E-mail: {mail}</p>
    </div>
  );
};

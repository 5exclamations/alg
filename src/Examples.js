import React from "react";
import "./Examples.css"

export default ({ link }) => {
  return (
    <div className="card">
        <h1>Примеры работ: </h1>
        {link.map((item) => {
        console.log(item);
        return <a href={item}>{item}</a>
        })}
    </div>);
};

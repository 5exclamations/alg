import React from "react";

export default ({name, lastName, age,job}) => {
  return (
    <div className="card">
        <h1>О себе: </h1>
        <p>Имя: {name}</p>
        <p>Фамилия: {lastName}</p>
        <p>Возраст: {age}</p>
        <p>Профессия: {job}</p>
    </div>
  );
};
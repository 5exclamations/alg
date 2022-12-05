import "./App.css";
import React, { useEffect } from "react";

function Modal() {
  const onClick = () => {
    document.querySelectorAll(".modal-content")[1].style.display = "none";
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Заказ 18020642-0063 доставлен</h5>
        </div>
        <div className="modal-body">
          <p>
            Заберите его в пункте выдачи до 15 апреля включительно, потом заказ
            придется отменить.
            <br />
            Вход в пункт выдачи только в маске и перчатках.
          </p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClick}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}

function Notifications() {
  const onClick = () => {
    document.querySelectorAll(".modal-content")[1].style.display = "block";
  };
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <button type="button" className="btn btn-primary" onClick={onClick}>
          Уведомления
        </button>
      </div>
    </div>
  );
}

function App() {
  const onKeyDown = (event) => {
    if (event.key === "Escape") {
      document.querySelectorAll(".modal-content")[1].style.display = "none";
    }
    console.log(event.key);
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <div className="app">
      <Notifications />
      <Modal />
    </div>
  );
}

export default App;

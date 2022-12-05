import React, { useEffect } from "react";



function Notes() {
  return (
    <div className="dialog">
      <div className="m-content">
        <button type="button" className="btn btn-primary" onClick={(event) => {
    document.querySelectorAll(".m-content")[1].style.display = "block";
  }}>
          Уведомления
        </button>
      </div>
    </div>
  );
}

function App() {

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        document.querySelectorAll(".m-content")[1].style.display = "none";
      }
      console.log(event.key);
    });

    return () => {
      window.removeEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          document.querySelectorAll(".m-content")[1].style.display = "none";
        }
        console.log(event.key);
      });
    };
  });

  return (
    <div className="app">
      <Notes />
      <Modal />
    </div>
  );
}
function Modal() {

  return (
    <div className="dialog">
      <div className="m-content">
        <div className="m-header">
          <h5 className="m-title">Заказ 97210652-0049 доставлен</h5>
        </div>
        <div className="m-body">
          <p>
            Заберите его в пункте выдачи до 28 апреля включительно, потом заказ
            придется отменить.
            <br />
            Вход в пункт выдачи только в маске и перчатках.
          </p>
        </div>
        <div className="m-footer">
          <button type="button" className="btn btn-secondary" onClick={ () => {
    document.querySelectorAll(".m-content")[1].style.display = "none";
  }}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;

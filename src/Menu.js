import React from "react";
import { Link } from "react-router-dom";


export default () => {
  return (
    <div className="mobile-list">
     <button>
      Menu
     </button>
      <Link className="link" to="/about">
        О нас
      </Link>
      <Link className="link" to="/contacts">
        Контакты
      </Link>
      <Link className="link" to="/team">
        Наша команда
      </Link>
    </div>
  );
};

import React, { useEffect } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./index.css";
import AboutPage from "./AboutPage";
import ContactsPage from "./ContactsPage";
import Team from "./Team";
import Menu from "./Menu";

function App() {


  useEffect(() => {
    window.addEventListener("resize", windowResize);
    
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  });
 
  const windowResize = () => {
    if (window.innerWidth > 500)
      document.querySelector(".mobile-list").style.display = "none";
  };
 
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="#">
            Пингвины
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              if (document.querySelector(".mobile-list").style.display === "flex")
                document.querySelector(".mobile-list").style.display = "none";
              else document.querySelector(".mobile-list").style.display = "flex";
            }}
          >
            <span className="navbar-toggler-icon">
              <img src="./menu.png" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            
              <li className="nav-item">
                <Link className="link" to="/about">
                  О нас
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="/contacts">
                  Контакты
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="/team">
                  Наша команда
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Menu />
        <Routes>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contacts" element={<ContactsPage />}></Route>
          <Route path="/team" element={<Team />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

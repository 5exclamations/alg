import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import About from "./About";
import Examples from "./Examples";  
import ContactInfo from "./ContactInfo";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="header">
          <Link className="set" to="/about">
            О себе
          </Link>
          <Link className="set" to="/examples">
            Примеры работ
          </Link>
          <Link className="set" to="/contacts">
            Контакты
          </Link>
        </div>
        <Routes>
          <Route
            path="/about"
            element={<About name="Фарман" lastName="Гусейнов" age="19" job="Junior FullStack" />}
          ></Route>
          <Route
            path="/examples"
            element={
              <Examples
                link={[
                  "https://github.com/farman1703/M1",
                  "https://github.com/farman1703/AlgoritmikaM2",
                  "https://github.com/farman1703/AlgoritmikaM3"
                ]}
              />
            }
          ></Route>
          <Route
            path="/contacts"
            element={<ContactInfo phone="+994703350203" mail="farman.guseynov.291@gmail.com" />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import UrlShorter from "./Components/UrlShorter";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="routes">
        <Routes>
          <Route exact path="/" Component={UrlShorter} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

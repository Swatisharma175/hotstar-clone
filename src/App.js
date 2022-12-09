import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import Genres from "./components/Genres/Genres";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:type/:id" element={<Details />} />
          <Route path="/genres" element={<Genres />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

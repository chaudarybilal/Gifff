import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Giff/Home";
import About from "./Giff/About";
import Contact from "./Giff/Contact";
import Header from "./Giff/Header";
import { useState } from "react";

function App() {
  const [favt, setfavt] = useState([]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home favtdata={favt} setfavt={setfavt} />} />
        <Route path="about" element={<About favtdata={favt} />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

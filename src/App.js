import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Giff/Home";
import About from "./Giff/About";
import Contact from "./Giff/Contact";
import Header from "./Giff/Header";
import { ContextProvider } from "./Giff/Giphy";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ContextProvider>
              <Home />
            </ContextProvider>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

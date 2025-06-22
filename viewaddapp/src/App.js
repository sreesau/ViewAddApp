import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./components/add";
import View from "./components/view";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/add" element={<Add/>} />
        <Route path="/view" element={<View />} />
         <Route path="/" element={<Add/>} />

      </Routes>
    </Router>
  );
}

export default App;

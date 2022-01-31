import React, { Component } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HomePage, Registration, Login } from "./Pages/index"

function App() {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/signin";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn/>} />
    </Routes>
  );
}

export default App;

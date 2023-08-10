import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from './components/layout/DefaultLayout'
import "./scss/style.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" name="Home" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

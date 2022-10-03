import React from "react";
import Mainpage from "./pages/Mainpage";
import ControlledInputs from "./pages/Register";
import Event from "./pages/Event";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="form" element={<ControlledInputs />} />
        <Route path="event" element={<Event />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

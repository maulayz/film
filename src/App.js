import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./Pages/Home";
import Action from "./Pages/Action";
import Comedy from "./Pages/Comedy";
import Horror from "./Pages/Horror";
import Drama from "./Pages/Drama";
import Fantasy from "./Pages/Fantasy";
import Scifi from "./Pages/Scifi";
import Thriller from "./Pages/Thriller";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Action" element={<Action />} />
            <Route path="/Comedy" element={<Comedy />} />
            <Route path="/Horror" element={<Horror />} />
            <Route path="/Drama" element={<Drama />} />
            <Route path="/Fantasy" element={<Fantasy />} />
            <Route path="/Scifi" element={<Scifi />} />
            <Route path="/Thriller" element={<Thriller />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}

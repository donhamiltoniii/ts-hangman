import React from "react";

import Hangman from "./components/Hangman";

import "./App.css";
import { randomWord } from "./words";

const App = () => (
  <div className="App">
    <Hangman answer={randomWord()} />
  </div>
);

export default App;

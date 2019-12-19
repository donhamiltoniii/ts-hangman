import React from "react";

import Hangman from "../../../components/hangman/hangman.component";

import "./app.styles.scss";
import { randomWord } from "../../../words";

const App = () => (
  <div className="App">
    <Hangman answer={randomWord()} />
  </div>
);

export default App;

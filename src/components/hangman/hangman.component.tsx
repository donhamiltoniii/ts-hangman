import React from "react";

import { HangmanProps } from "../../types";
import "./hangman.styles.scss";
import img0 from "../../assets/img/0.jpg";
import img1 from "../../assets/img/1.jpg";
import img2 from "../../assets/img/2.jpg";
import img3 from "../../assets/img/3.jpg";
import img4 from "../../assets/img/4.jpg";
import img5 from "../../assets/img/5.jpg";
import img6 from "../../assets/img/6.jpg";

const Hangman: React.FC<HangmanProps> = ({
  answer,
  images = [img0, img1, img2, img3, img4, img5, img6],
  maxIncorrect = 6
}) => {
  const [correct, setCorrect] = React.useState(new Set());
  const [incorrect, setIncorrect] = React.useState(new Set());

  function generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        value={ltr}
        onClick={handleGuess}
        disabled={correct.has(ltr) || incorrect.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  function guessedWord() {
    return answer.split("").map(ltr => (correct.has(ltr) ? ltr : "_"));
  }

  function handleGuess(evt: React.MouseEvent<HTMLButtonElement>) {
    let ltr = evt.currentTarget.value;
    answer.includes(ltr)
      ? setCorrect(st => new Set(st).add(ltr))
      : setIncorrect(st => new Set(st).add(ltr));
  }

  function isCorrect() {
    return !guessedWord().includes("_");
  }

  function isTooManyGuesses(incorrect: Set<unknown>) {
    return incorrect.size === maxIncorrect;
  }

  /** render: render game */

  return isTooManyGuesses(incorrect) || isCorrect() ? (
    <h1>
      {isCorrect() ? `You Won! It was ` : `You Lost! Correct answer was `}
      {answer}!
    </h1>
  ) : (
    <div className="Hangman">
      <h1>Hangman</h1>
      <img src={images[incorrect.size]} alt="Current Hangman state" />
      <p className="Hangman-word">{guessedWord()}</p>
      <p className="Hangman-btns">{generateButtons()}</p>
    </div>
  );
};

export default Hangman;

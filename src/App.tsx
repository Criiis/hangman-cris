import { useState } from "react";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import word from './wordList.json'

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => word[Math.floor(Math.random() * word.length)])
  const [guessLetters, setGuessLetters] = useState<string[]>([])
  console.log(wordToGuess)

  return (
    <>
      <div>Hello world!</div>
      <HangmanDrawing/>
      <HangmanWord/>
      <Keyboard/>
    </>
  );
}

export default App;

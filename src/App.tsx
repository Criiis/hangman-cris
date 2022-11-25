import { useState } from 'react'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'
import word from './wordList.json'
import styles from './App.module.css'

function App() {
  const [wordToGuess, setWordToGuess] = useState(
    () => word[Math.floor(Math.random() * word.length)]
  )
  const [guessLetters, setGuessLetters] = useState<string[]>([])
  console.log(wordToGuess)

  return (
    <div className={styles.app}>
      <div>Lose Win</div>
      <HangmanDrawing />
      <HangmanWord wordToGuess={wordToGuess} />
      <Keyboard />
    </div>
  )
}

export default App

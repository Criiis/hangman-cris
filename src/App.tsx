import { useState } from 'react'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'
import word from './wordList.json'
import styles from './App.module.css'

function App() {
  const [wordToGuess] = useState(
    () => word[Math.floor(Math.random() * word.length)]
  )
  const [guessLetters, setGuessLetters] = useState<string[]>([])

  const letterClick = (letter: string) => {
    console.log('clicked')
    const letterUpper = letter.toUpperCase()
    if (guessLetters.includes(letterUpper)) return
    setGuessLetters((prev) => [...prev, letterUpper])
  }

  return (
    <div className={styles.app}>
      <div>Lose Win</div>
      <HangmanDrawing />
      <HangmanWord wordToGuess={wordToGuess} letterGuessed={guessLetters} />
      <Keyboard letterClick={letterClick} />
    </div>
  )
}

export default App

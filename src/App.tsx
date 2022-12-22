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

  //check the incorrect letter
  const [wordLetter] = useState(Array.from(wordToGuess.toUpperCase()))
  console.log(Array.from(wordToGuess.toUpperCase()))

  //get only the incorrect letters
  const incorrectLetters = guessLetters.filter((el) => !wordLetter.includes(el))

  //check winner or loser
  const isLoser = incorrectLetters.length >= 10
  const isWinner = wordLetter.every((letter) => guessLetters.includes(letter))

  //click event for screen keyboard
  const letterClick = (letter: string) => {
    if (isLoser || isWinner) return
    const letterUpper = letter.toUpperCase()
    if (guessLetters.includes(letterUpper)) return
    setGuessLetters((prev) => [...prev, letterUpper])
  }

  return (
    <div className={styles.app}>
      <h1>Hangman Game</h1>
      {isLoser && <h3>GAME OVER! Please reload the page.</h3>}
      {isWinner && <h3>YOU WON! Please reload the page.</h3>}
      <HangmanDrawing incorrectGuesses={incorrectLetters} />
      <HangmanWord wordToGuess={wordToGuess} letterGuessed={guessLetters} />
      <Keyboard letterClick={letterClick} letterGuessed={guessLetters} />
    </div>
  )
}

export default App

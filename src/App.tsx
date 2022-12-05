import { useState, useMemo } from 'react'
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
  const [wordLetter] = useState(wordToGuess.toUpperCase().split(''))

  //get only the incorrect letters
  const incorrectLetters = useMemo(
    () => guessLetters.filter((el) => !wordLetter.includes(el)),
    [guessLetters, wordLetter]
  )

  //click event for screen keyboard
  const letterClick = (letter: string) => {
    const letterUpper = letter.toUpperCase()
    if (guessLetters.includes(letterUpper)) return
    setGuessLetters((prev) => [...prev, letterUpper])
  }

  return (
    <div className={styles.app}>
      <div>Lose Win</div>
      <HangmanDrawing incorrectGuesses={incorrectLetters} />
      <HangmanWord wordToGuess={wordToGuess} letterGuessed={guessLetters} />
      <Keyboard letterClick={letterClick} letterGuessed={guessLetters}/>
    </div>
  )
}

export default App

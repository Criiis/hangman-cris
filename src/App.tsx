import { useState, useMemo } from 'react'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'
import word from './wordList.json'
import styles from './App.module.css'
import Modal from './components/ui/Modal'

const gettingWord = (): string => word[Math.floor(Math.random() * word.length)]
const maxChances = 10

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(gettingWord())
  const [guessLetters, setGuessLetters] = useState<string[]>([])

  //check the incorrect letter
  const wordLetter = useMemo(
    () => Array.from(wordToGuess.toUpperCase()),
    [wordToGuess]
  )

  //get only the incorrect letters
  const incorrectLetters = guessLetters.filter((el) => !wordLetter.includes(el))

  //check winner or loser
  const isLoser = incorrectLetters.length >= maxChances
  const isWinner = wordLetter.every((letter) => guessLetters.includes(letter))

  //chances left to lose the game
  const chancesToGuess = maxChances - incorrectLetters.length

  //click event for screen keyboard
  const letterClick = (letter: string) => {
    if (isLoser || isWinner) return
    const letterUpper = letter.toUpperCase()
    if (guessLetters.includes(letterUpper)) return
    setGuessLetters((prev) => [...prev, letterUpper])
  }

  //reset functionality for app
  const resetFunctionality = () => {
    setGuessLetters([])
    setWordToGuess(gettingWord())
  }

  return (
    <>
      <div className={styles.app}>
        <h1>Hangman Game</h1>
        <HangmanDrawing incorrectGuesses={incorrectLetters} />
        <HangmanWord wordToGuess={wordToGuess} letterGuessed={guessLetters} />
        <p style={{ margin: 0 }}>Chances left {chancesToGuess}</p>
        <Keyboard letterClick={letterClick} letterGuessed={guessLetters} />
      </div>

      {(isLoser || isWinner) && (
        <Modal>
          <h1 className="title">
            {isLoser ? 'YOU CAN DO BETTER...' : wordToGuess.toUpperCase()}
          </h1>
          {isLoser && (
            <p>Try again, the correct word was: {wordToGuess.toUpperCase()}!</p>
          )}
          {isWinner && <p>Well done, you smashed it!</p>}
          <button className="reset-button" onClick={resetFunctionality}>
            Reset game
          </button>
        </Modal>
      )}
    </>
  )
}

export default App

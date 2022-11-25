import { useEffect, useState } from 'react'
import styles from './HangmanWord.module.css'

interface hangmanWordProps {
  wordToGuess: string
  letterGuessed: string[]
}

export default function HangmanWord({
  wordToGuess,
  letterGuessed,
}: hangmanWordProps) {
  const [lettersGuest, setLettersGuest] = useState(letterGuessed)

  //update word
  useEffect(() => {
    setLettersGuest(letterGuessed)
  }, [letterGuessed])

  console.log(lettersGuest)

  return (
    <div className={styles.wordContainer}>
      {wordToGuess.split('').map((el, i) => (
        <span className={styles.wordBottom} key={i}>
          {!lettersGuest?.includes(el.toUpperCase()) ? (
            <span style={{ opacity: '0' }}>{i % 2 === 0 ? 'H' : 'A'}</span>
          ) : (
            <span>{lettersGuest?.includes(el.toUpperCase()) ? el : ''}</span>
          )}
        </span>
      ))}
    </div>
  )
}

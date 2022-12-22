import styles from './HangmanWord.module.css'

interface hangmanWordProps {
  wordToGuess: string
  letterGuessed: string[]
}

export default function HangmanWord({
  wordToGuess,
  letterGuessed,
}: hangmanWordProps) {
  return (
    <div className={styles.wordContainer}>
      {wordToGuess.split('').map((el, i) => (
        <span className={styles.wordBottom} key={i}>
          {!letterGuessed?.includes(el.toUpperCase()) ? (
            <span style={{ opacity: '0' }}>{i % 2 === 0 ? 'H' : 'A'}</span>
          ) : (
            <span>{letterGuessed?.includes(el.toUpperCase()) ? el : ''}</span>
          )}
        </span>
      ))}
    </div>
  )
}

import styles from './HangmanDrawing.module.css'
interface HangmanDrawingProps {
  incorrectGuesses: string[]
}

const Gallows = () => {
  return (
    <>
      <span className={styles.gallowsHangerEnd}></span>
      <span className={styles.gallowsHanger}></span>
      <span className={styles.gallowsPole}></span>
      <span className={styles.gallowsBase}></span>
    </>
  )
}
const body = () => {
  return <h1>body</h1>
}

const header = () => {
  return <h1>head</h1>
}

export default function HangmanDrawing({
  incorrectGuesses,
}: HangmanDrawingProps) {
  const hangman = [body, header]
  console.log('incorrectGuesses', incorrectGuesses)
  console.log(hangman[1]())
  return (
    <div className={styles.gallowsContainer}>
      {/* {incorrectGuesses.length} */}

      <Gallows />
    </div>
  )
}

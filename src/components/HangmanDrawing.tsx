import styles from './HangmanDrawing.module.css'
interface HangmanDrawingProps {
  incorrectGuesses: string[]
}

const GallowsBase = () => {
  return <span className={styles.gallowsBase}></span>
}
const GallowsPole = () => {
  return <span className={styles.gallowsPole}></span>
}
const GallowsHanger = () => {
  return <span className={styles.gallowsHanger}></span>
}
const GallowsHangerEnd = () => {
  return <span className={styles.gallowsHangerEnd}></span>
}
const Head = () => {
  return <span className={styles.bodyHead}></span>
}
const TopBody = () => {
  return <span className={styles.topBody}></span>
}
const LeftArm = () => {
  return <span className={styles.leftArm}></span>
}
const RightArm = () => {
  return <span className={styles.rightArm}></span>
}
const LeftLeg = () => {
  return <span className={styles.leftLeg}></span>
}
const RightLeg = () => {
  return <span className={styles.rightLeg}></span>
}

const bodyParts = [
  GallowsBase(),
  GallowsPole(),
  GallowsHanger(),
  GallowsHangerEnd(),
  Head(),
  TopBody(),
  LeftArm(),
  RightArm(),
  LeftLeg(),
  RightLeg(),
]

export default function HangmanDrawing({
  incorrectGuesses,
}: HangmanDrawingProps) {
  const incorrectGuessesLength = incorrectGuesses.length

  return (
    <div className={styles.gallowsContainer}>
      {bodyParts.slice(0, incorrectGuessesLength)}
    </div>
  )
}

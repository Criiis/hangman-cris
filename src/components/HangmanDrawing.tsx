import styles from './HangmanDrawing.module.css'
interface HangmanDrawingProps {
  incorrectGuesses: string[]
}

const GallowsBase = () => {
  return <span key="gallowsBase" className={styles.gallowsBase}></span>
}
const GallowsPole = () => {
  return <span key="gallowsPole" className={styles.gallowsPole}></span>
}
const GallowsHanger = () => {
  return <span key="gallowsHanger" className={styles.gallowsHanger}></span>
}
const GallowsHangerEnd = () => {
  return (
    <span key="gallowsHangerEnd" className={styles.gallowsHangerEnd}></span>
  )
}
const Head = () => {
  return <span key="bodyHead" className={styles.bodyHead}></span>
}
const TopBody = () => {
  return <span key="topBody" className={styles.topBody}></span>
}
const LeftArm = () => {
  return <span key="leftArm" className={styles.leftArm}></span>
}
const RightArm = () => {
  return <span key="rightArm" className={styles.rightArm}></span>
}
const LeftLeg = () => {
  return <span key="leftLeg" className={styles.leftLeg}></span>
}
const RightLeg = () => {
  return <span key="rightLeg" className={styles.rightLeg}></span>
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

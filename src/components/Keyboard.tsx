import styles from './Keyboard.module.css'
const keys = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

export default function Keyboard() {
  return (
    <div className={styles.keyboardContainer}>
      {keys.map((key) => (
        <button className={`${styles.btn} ${styles.active}`} key={key}>
          {key}
        </button>
      ))}
    </div>
  )
}

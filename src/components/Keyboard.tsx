import { isConstructorDeclaration } from 'typescript'
import styles from './Keyboard.module.css'
const keys = [
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'm',
]

export default function Keyboard({ letterClick }: any) {
  return (
    <div className={styles.keyboardContainer}>
      {keys.map((key) => (
        <button
          onClick={() => letterClick(key)}
          className={`${styles.btn} ${styles.active}`}
          key={key}
        >
          {key}
        </button>
      ))}
    </div>
  )
}

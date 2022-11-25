import { useState } from 'react'
import styles from './Keyboard.module.css'
interface KeyboardProps {
  letterClick: (letter: string) => void
}
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

export default function Keyboard({ letterClick }: KeyboardProps) {
  const [keyboardController, setKeyboardController] = useState<string[]>([])

  return (
    <div className={styles.keyboardContainer}>
      {keys.map((key) => (
        <button
          onClick={() => {
            setKeyboardController((prev) => [...prev, key.toUpperCase()])
            letterClick(key)
          }}
          className={`${styles.btn} ${
            keyboardController.includes(key.toUpperCase())
              ? styles.inactive
              : styles.active
          }`}
          key={key}
        >
          {key}
        </button>
      ))}
    </div>
  )
}

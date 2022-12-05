import { useState } from 'react'
import styles from './Keyboard.module.css'
interface KeyboardProps {
  letterClick: (letter: string) => void
  letterGuessed: string[]
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

export default function Keyboard({
  letterClick,
  letterGuessed,
}: KeyboardProps) {
  return (
    <div className={styles.keyboardContainer}>
      {keys.map((key) => (
        <button
          onClick={() => letterClick(key)}
          className={`${styles.btn} ${
            letterGuessed.includes(key.toUpperCase())
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

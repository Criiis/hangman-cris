import { useEffect, useState } from 'react'

interface hangmanWordProps {
  wordToGuess: string
  letterGuessed: string[]
}

export default function HangmanWord({
  wordToGuess,
  letterGuessed,
}: hangmanWordProps) {
  const word = wordToGuess
  console.log('🚀 ~ file: HangmanWord.tsx ~ line 13 ~ word', word)
  const [lettersGuest, setLettersGuest] = useState(letterGuessed)

  useEffect(() => {
    setLettersGuest(letterGuessed)
  }, [letterGuessed])

  console.log(lettersGuest)

  return (
    <div
      style={{
        display: 'flex',
        gap: '.5rem',
        fontSize: '2rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      }}
    >
      {word.split('').map((el, i) => (
        <span style={{ borderBottom: '4px solid black' }} key={i}>
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

import { useEffect, useState } from 'react'

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
    <div
      style={{
        display: 'flex',
        gap: '.5rem',
        fontSize: '2rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      }}
    >
      {wordToGuess.split('').map((el, i) => (
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

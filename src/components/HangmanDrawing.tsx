interface HangmanDrawingProps {
  incorrectGuesses: string[]
}

export default function HangmanDrawing({
  incorrectGuesses,
}: HangmanDrawingProps) {
  console.log('incorrectGuesses', incorrectGuesses)
  return (
    <div>
      {incorrectGuesses.length}
      <p>HangmanDrawing</p>
    </div>
  )
}

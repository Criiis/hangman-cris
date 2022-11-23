export default function HangmanWord() {
  const word = 'HangmanWord'
  const wordGuest: string[] = []

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
          {!wordGuest?.includes(el.toUpperCase()) ? (
            <span style={{ opacity: '0' }}>{i % 2 === 0 ? 'H' : 'A'}</span>
          ) : (
            <span>{wordGuest?.includes(el.toUpperCase()) ? el : ''}</span>
          )}
        </span>
      ))}
    </div>
  )
}

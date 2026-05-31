import { useState } from 'react'

function App() {
  const [scoreA, setScoreA] = useState(0)
  const [scoreB, setScoreB] = useState(0)

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#06130d',
        color: 'white',
        padding: '24px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '34px', marginBottom: '10px' }}>
        BKBC Adil Tournament 2026
      </h1>

      <p style={{ color: '#b7c7bd', fontSize: '20px', marginBottom: '34px' }}>
        Live tournament test app
      </p>

      <div
        style={{
          background: '#10251a',
          borderRadius: '22px',
          padding: '24px',
          maxWidth: '460px',
          margin: '0 auto',
          border: '1px solid #2f5f42',
        }}
      >
        <h2 style={{ fontSize: '28px' }}>Match 1</h2>

        <div style={rowStyle}>
          <span>IQ</span>
          <button onClick={() => setScoreA(scoreA + 1)}>+ Score</button>
          <strong>{scoreA}</strong>
        </div>

        <div style={rowStyle}>
          <span>Moobe</span>
          <button onClick={() => setScoreB(scoreB + 1)}>+ Score</button>
          <strong>{scoreB}</strong>
        </div>

        <button
          onClick={() => {
            setScoreA(0)
            setScoreB(0)
          }}
          style={{ marginTop: '30px', padding: '8px 16px', fontSize: '16px' }}
        >
          Reset Match
        </button>

        <h3 style={{ marginTop: '34px', color: '#5cff9d', fontSize: '26px' }}>
          Winner: {scoreA > scoreB ? 'IQ' : scoreB > scoreA ? 'Moobe' : 'Not decided'}
        </h3>
      </div>
    </div>
  )
}

const rowStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr auto 40px',
  alignItems: 'center',
  gap: '16px',
  marginTop: '20px',
  fontSize: '28px',
  textAlign: 'left' as const,
}

export default App
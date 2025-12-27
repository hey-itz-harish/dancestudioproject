import { useState } from 'react'
import './index.css'

function App() {
  const [step, setStep] = useState('LOGIN') // LOGIN, OTP, DASHBOARD
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [authToken, setAuthToken] = useState(null)

  const handleLogin = (e) => {
    e.preventDefault()
    // Simulate API call to send OTP sets step to OTP
    setStep('OTP')
  }

  const handleVerify = (e) => {
    e.preventDefault()
    // Simulate API call to verify OTP sets token and step to DASHBOARD
    setAuthToken('dummy-token')
    setStep('DASHBOARD')
  }

  const handleUpload = (e) => {
    e.preventDefault()
    console.log('Uploading with token:', authToken)
    alert('Files uploading... (Simulation)')
  }

  return (
    <div className="page" style={{
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=2574&auto=format&fit=crop)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '20px', fontSize: '2rem', fontWeight: 800 }}>
          PLATFORM <span style={{ color: '#ff0000' }}>ACCESS</span>
        </h1>

        {step === 'LOGIN' && (
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <p style={{ color: '#ccc', marginBottom: '10px' }}>Enter your credentials to manage content.</p>
            <input
              type="text"
              placeholder="Email or Phone"
              className="contact-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="cta-button">SEND OTP</button>
          </form>
        )}

        {step === 'OTP' && (
          <form onSubmit={handleVerify} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <p style={{ color: '#ccc', marginBottom: '10px' }}>Enter the 6-digit code sent to you.</p>
            <input
              type="text"
              placeholder="000000"
              className="contact-input"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              style={{ textAlign: 'center', letterSpacing: '5px', fontSize: '1.2rem' }}
            />
            <button type="submit" className="cta-button">VERIFY ACCESS</button>
            <button type="button" onClick={() => setStep('LOGIN')} style={{ background: 'none', border: 'none', color: '#ff0000', cursor: 'pointer', marginTop: '10px' }}>
              Back to Login
            </button>
          </form>
        )}

        {step === 'DASHBOARD' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ padding: '20px', border: '2px dashed rgba(255,255,255,0.2)', borderRadius: '10px', marginTop: '20px' }}>
              <p style={{ marginBottom: '15px', color: '#a0a0a0' }}>Upload Videos & Images</p>
              <input type="file" multiple className="contact-input" style={{ marginBottom: '10px' }} />
            </div>
            <button onClick={handleUpload} className="cta-button">UPLOAD MEDIA</button>
            <button type="button" onClick={() => { setStep('LOGIN'); setAuthToken(null); }} style={{ background: 'none', border: 'none', color: '#a0a0a0', cursor: 'pointer', marginTop: '10px' }}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

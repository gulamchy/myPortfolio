import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SmoothScrolling from './components/lenis/smoothScrolling.animation.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScrolling>
      <App />
    </SmoothScrolling>

  </StrictMode>,
)

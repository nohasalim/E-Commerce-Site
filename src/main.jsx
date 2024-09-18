import { StrictMode } from 'node_modules/react'
import { createRoot } from 'node_modules/react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

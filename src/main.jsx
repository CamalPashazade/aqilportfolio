import { StrictMode } from 'react'
import { HashRouter } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter base="/">
    <App />
    </HashRouter>
  </StrictMode>,
)

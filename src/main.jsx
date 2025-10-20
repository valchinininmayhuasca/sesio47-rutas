import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/themeContext.jsx'
import { UserProvider } from './context/userContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
        <BrowserRouter basename="/rutas">
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </UserProvider>
  </StrictMode>,
)

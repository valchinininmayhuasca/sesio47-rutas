import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
import { ThemeProvider } from './context/themeContext.jsx'
import { UserProvider } from './context/userContext.jsx'
=======
>>>>>>> 15228711b4fc98f829a12063c5618f8b642ae3c3
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <UserProvider>
      <ThemeProvider>
        <BrowserRouter basename="/rutas">
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </UserProvider>
=======
    <BrowserRouter>
    <App />
    </BrowserRouter>
>>>>>>> 15228711b4fc98f829a12063c5618f8b642ae3c3
  </StrictMode>,
)

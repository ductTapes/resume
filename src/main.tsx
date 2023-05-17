import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from 'src/App'
import ThemeProvider from 'src/libs/mui/ThemeProvider'
import FontStyles from 'src/styles/FontStyles'
import ResetStyles from 'src/styles/ResetStyles'
import GlobalStyles from 'src/styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <FontStyles />
        <ResetStyles />
        <GlobalStyles />

        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

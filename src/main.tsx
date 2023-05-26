import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from 'src/App'
import ThemeProvider from 'src/libs/mui/ThemeProvider'
import FontStyles from 'src/styles/FontStyles'
import ResetStyles from 'src/styles/ResetStyles'
import GlobalStyles from 'src/styles/GlobalStyles'
import { HeaderProvider } from 'src/components/organisms/Header/HeaderContextProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <HeaderProvider>
          <FontStyles />
          <ResetStyles />
          <GlobalStyles />

          <App />
        </HeaderProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

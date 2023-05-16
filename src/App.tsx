import { Routes, Route, Link } from 'react-router-dom'
import { Typography, useTheme } from '@mui/material'

function App() {
  const theme = useTheme()
  return (
    <div>
      <Link to="/">
        <Typography sx={{ color: theme.palette.common.blue }}>123</Typography>
      </Link>
      <Link to="/1">1</Link>
      <Routes>
        <Route path="/" element={<div>0</div>} />
        <Route path="/1" element={<div>1</div>} />
      </Routes>
    </div>
  )
}

export default App

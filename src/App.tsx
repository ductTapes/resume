import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <Link to="/">0</Link>
      <Link to="/1">1</Link>
      <Routes>
        <Route path="/" element={<div>0</div>} />
        <Route path="/1" element={<div>1</div>} />
      </Routes>
    </div>
  )
}

export default App

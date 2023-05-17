import { Routes, Route } from 'react-router-dom'
import Header from 'src/components/organisms/Header/Header'
import HomePage from 'src/pages/HomePage'

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App

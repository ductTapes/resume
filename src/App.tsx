import { Routes, Route } from 'react-router-dom'
import Header from 'src/components/organisms/Header/Header'
import HomePage from 'src/pages/HomePage'
import Footer from 'src/components/organisms/Footer'
import CursorFollower from 'src/components/atoms/CursorFollower'

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />

      <CursorFollower />
    </div>
  )
}

export default App

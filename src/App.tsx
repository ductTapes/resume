import { Routes, Route } from 'react-router-dom'
import Header from 'src/components/organisms/Header/Header'
import HomePage from 'src/pages/HomePage'
import Footer from 'src/components/organisms/Footer'
import CursorFollower from 'src/components/atoms/CursorFollower'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      setTimeout(() => {
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [])

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

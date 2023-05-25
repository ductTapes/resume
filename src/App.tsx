import { Routes, Route } from 'react-router-dom'
import Header from 'src/components/organisms/Header/Header'
import HomePage from 'src/pages/HomePage'
import Footer from 'src/components/organisms/Footer'

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App

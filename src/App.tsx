import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import OrquestaPage from './pages/OrquestaPage'
import TourPage from './pages/TourPage'
import NoticiasPage from './pages/NoticiasPage'
import ContactoPage from './pages/ContactoPage'
import MemberProfile from './pages/MemberProfile'

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="app">
        <Header />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/orquesta" element={<OrquestaPage />} />
              <Route path="/orquesta/:id" element={<MemberProfile />} />
              <Route path="/tour" element={<TourPage />} />
              <Route path="/noticias" element={<NoticiasPage />} />
              <Route path="/contacto" element={<ContactoPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App


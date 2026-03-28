import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Spaces from './pages/Spaces'
import Community from './pages/Community'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Directory from './pages/Directory'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/community" element={<Community />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/directory" element={<Directory />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'

import Home from './pages/home'
import About from './pages/about'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Layout>
  </Router>
)

export default App

import { BrowserRouter as Router } from 'react-router-dom'
import Routing from './routing'
import NavBar from './components/NavBar'
import SocialIcons from './components/SocialIcons'
import Footer from './components/Footer'

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <NavBar />
    <SocialIcons />
    <Routing />
    <Footer />
  </Router>
)

export default App

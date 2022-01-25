import NavBar from '../NavBar'
import SocialIcons from '../SocialIcons'
import Footer from '../Footer'

const Layout = ({ children }) => (
  <>
    <NavBar />
    <SocialIcons />
    {children}
    <Footer />
  </>
)

export default Layout

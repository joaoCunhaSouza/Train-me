import { Link, Route, Routes, } from "react-router-dom"
import { Home } from "./pages/Home"
import { Features } from "./pages/Features"
import { Community } from "./pages/Community"
import { Blog } from "./pages/Blog"
import { Pricing } from "./pages/Pricing"
import { Register } from "./pages/Register"
import LogoNextcent from './LogoNextcent.svg';
import Container from './container';
import './style.css';


function App() {


  return (
    <>
      <Container>
        <header className="header">

          <div className="hero">

            {/* <img src={LogoNextcent} alt="Logo Nextcent" className="svg-logo" /> */}

            <h1>train.me</h1>

          </div>

          <nav>

            <ul className="ul">
              <li><Link to="/"> Home</Link></li>
              <li><Link to="/Features"> Features</Link></li>
              <li><Link to="/Community"> Community</Link></li>
              <li><Link to="/Blog"> Blog</Link></li>
              <li><Link to="/Pricing"> Pricing</Link></li>
              <li className="no-list-style-0"><Link to="/Register" className="more-link-0">Register Now</Link></li>
            </ul>

          </nav>

        </header>

      </Container>

      <>
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>



      </>
    </>
  )
}

export default App

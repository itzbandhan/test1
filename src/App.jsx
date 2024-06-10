import { Routes, BrowserRouter, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Error from "./pages/Error"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Projects from "./pages/Projects"
import "@fontsource/poppins"; 
import "@fontsource/poppins/400.css"; 
import "@fontsource/poppins/400-italic.css"; 
import "./css/App.css"
import Footer from "./components/Footer"
import AnimatedCursor from "react-animated-cursor"

function App() {

  return (
    <>
  <Navbar />
  
  <AnimatedCursor />
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<Error/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/projects" element={<Projects/>} />
    </Routes>
  </BrowserRouter>
    <Footer />
    </>
  )
}

export default App

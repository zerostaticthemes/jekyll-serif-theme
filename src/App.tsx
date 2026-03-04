import { Route, Routes, BrowserRouter } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Donate from "./pages/Donate"
import Programmes from "./pages/Programmes"
import Apply from "./pages/Apply"
import Team from "./pages/Team"
import PersonalPage from "./components/layout/PersonalPage"

import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import ScrollToTop from "./components/layout/ScrollToTop"

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/programs" element={<Programmes />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:founderId" element={<PersonalPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
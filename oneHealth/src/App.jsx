import { Header } from "@components/Header"
import './index.css'
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Services } from "./components/Services"
import { Benefits } from "./components/Benefits"
import { Team } from "./components/Team"
import { Testimonials } from "./components/Testimonials"
import { Footer } from "./components/Footer"
import { ScrollToTop } from "./components/helper/ScrollToTop"
function App() {
 
  return (
    <>
      <div className="">
        <Header/>
        <Hero/>
        <About/>
        <Services/>
        <Benefits/>
        <Team/>
        <Testimonials/>
        <Footer/>
        <ScrollToTop/>
      </div>
    </>
  )
}

export default App

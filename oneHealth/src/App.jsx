import { Header } from "@components/Header"
import './index.css'
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Services } from "./components/Services"

function App() {
 
  return (
    <>
      <div className="">
        <Header/>
        <Hero/>
        <About/>
        <Services/>
      </div>
    </>
  )
}

export default App

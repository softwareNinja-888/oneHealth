import { Header } from "@components/Header"
import './index.css'
import { Hero } from "./components/Hero"
import { About } from "./components/About"

function App() {
 
  return (
    <>
      <div className="">
        <Header/>
        <Hero/>
        <About/>
      </div>
    </>
  )
}

export default App

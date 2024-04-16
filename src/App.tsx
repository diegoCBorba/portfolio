import { Header } from "./components/Header/Header"
import { About } from "./components/About/About"
import { Projects } from "./components/Projects/Projects"
import { Contact } from "./components/Contact/Contact"
import { Footer } from "./components/Footer/Footer"

export function App() {
  return (
    <>
      <Header/> 
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

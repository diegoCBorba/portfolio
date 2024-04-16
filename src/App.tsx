import { Header } from "./components/Header/Header"
import { About } from "./components/About/About"
import { Projects } from "./components/Projects/Projects"
import { ProjectSlider } from "./components/Projects/ProjectsSlider"
import { Contact } from "./components/Contact/Contact"
import { Footer } from "./components/Footer/Footer"

export function App() {
  return (
    <>
      <Header/> 
      <About/>
      <Projects/>
      <ProjectSlider/>
      <Contact/>
      <Footer/>
    </>
  )
}

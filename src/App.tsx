import { Navbar } from "./components/Navbar/Navbar"
import { HamburgerNav } from "./components/HamburgerNav/HamburguerNav"
import { Profile } from "./components/Profile/Profile"
import { About } from "./components/About/About"
import { Experience } from "./components/Experience/Experience"
import { Projects } from "./components/Projects/Projects"
import { Contact } from "./components/Contact/Contact"
import { Footer } from "./components/Footer/Footer"

export function App() {
  return (
    <>
      <Navbar/>
      <HamburgerNav/>
      <Profile/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

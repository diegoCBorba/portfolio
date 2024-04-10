import { Navbar } from "./components/Navbar/Navbar"
import { HamburgerNav } from "./components/HamburgerNav/HamburguerNav"
import { Profile } from "./components/Profile/Profile"

export function App() {
  return (
    <>
      <Navbar/>
      <HamburgerNav/>
      <Profile/>
    </>
  )
}

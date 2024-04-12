import "./Header.css"
import { Navbar } from "../Navbar/Navbar"
import { HamburgerNav } from "../HamburgerNav/HamburguerNav"
import { Profile } from "../Profile/Profile"

export function Header(){
  return(
    <header id="header">
      <Navbar/>
      <HamburgerNav/>
      <Profile/>
    </header>
  )
}
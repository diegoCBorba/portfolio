import './Navbar.css'
import { NavLinks } from '../utils/NavLinks'

export function Navbar() {
  return (
    <nav id="desktop-nav">
      <div className="logo"><a href="">&#169; Diego Cardoso</a></div>
      <NavLinks/>
    </nav>
  )
}
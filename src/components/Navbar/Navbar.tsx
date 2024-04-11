import './Navbar.css'
import { NavLinks } from '../utils/NavLinks'

export function Navbar() {
  return (
    <nav id="desktop-nav">
      <div className="logo">Diego Cardoso</div>
      <NavLinks/>
    </nav>
  )
}
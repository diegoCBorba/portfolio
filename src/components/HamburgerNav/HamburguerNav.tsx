import { useState } from "react"
import "./HamburguerNav.css"

export function HamburgerNav(){
  const [menuState, setMenuState] = useState<boolean>(false)
  
  function toggleMenu(){
    setMenuState(!menuState)
  }
  
  return(
    <nav id="hamburger-nav">
      <div className="logo"><a href="">&#169; Diego Cardoso</a></div>
      <div className="hamburger-menu">
        <div 
        className={`hamburger-icon ${menuState ? 'open' : ''}`}  
        onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div 
        className={`menu-links ${menuState ? 'open' : ''}`} 
        onClick={toggleMenu}>
          <li><a className="nav-a" href="#about">Sobre</a></li>
          <li><a className="nav-a" href="#experience">Experiência</a></li>
          <li><a className="nav-a" href="#projects">Projetos</a></li>
          <li><a className="nav-a" href="#contacts">Contatos</a></li>
        </div>
      </div>
    </nav>
  )
}
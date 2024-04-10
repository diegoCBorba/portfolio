import { useState } from "react"
import "./HamburguerNav.css"

export function HamburgerNav(){
  const [menuState, setMenuState] = useState<boolean>(false)
  
  function toggleMenu(){
    setMenuState(!menuState)
  }
  
  return(
    <nav id="hamburger-nav">
      <div className="logo">Diego Cardoso</div>
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
          <li><a href="#about">Sobre</a></li>
          <li><a href="#experience">Experiência</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contatos</a></li>
        </div>
      </div>
    </nav>
  )
}
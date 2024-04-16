import { useState } from "react"
import "./HamburguerNav.css"
import { motion } from "framer-motion"

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
        <motion.div 
        className={`menu-links`} 
        animate={{
          width: menuState ? "100%" : "0%"
        }}
        transition={{
          duration: 0.7,
        }}
        >
          <div className="container-nav">
            <div className="links-about">
              <p>Navegação</p>
              <ul>
                <li onClick={toggleMenu}><a className="nav-b" href="#about">Sobre</a></li>
                {/* <li><a className="nav-b" href="#experience">Experiência</a></li> */}
                <li onClick={toggleMenu}><a className="nav-b" href="#projects">Projetos</a></li>
                <li onClick={toggleMenu}><a className="nav-b" href="#contacts">Contatos</a></li>
              </ul>
            </div>
            <div className="links-copyright">
              <p>&#169; Diego Cardoso</p>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}
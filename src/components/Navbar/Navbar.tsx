import './Navbar.css'

export function Navbar() {
  return (
    <nav id="desktop-nav">
      <div className="logo">Diego Cardoso</div>
      <div>
        <ul className="nav-links">
          <li><a href="#about">Sobre</a></li>
          <li><a href="#experience">Experiência</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contatos</a></li>
        </ul>
      </div>
    </nav>
  )
}
import "./About.css"
import cv from "../../assets/pdfs/curriculo-s-24.pdf"
import { Arrow } from "../utils/Arrow"
import { SubTitle } from "../utils/SubTitle"

export function About(){
  return(
    <section id="about">
      <div className="container-section">
        <SubTitle>Conheça Mais</SubTitle>
        <p className="title">Sobre mim</p>
        <div className="about-container">
          <div className="section-socials">
            <a href="https://github.com/diegoCBorba" className="social-icons github" target="_blank">
              <svg href="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <span className="border-socials"/>
            <a href="https://www.linkedin.com/in/diego-cardoso-15a624220/" className="social-icons linkedin" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <span className="border-socials"/>
            <a href="mailto:diegocardosobsantos@gmail.com" className="social-icons email" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>
          <div className="section-about">
            <p className="section__text__p2">Sou um programador com experiência em desenvolvimento web e análise de dados, estou preparado para agregar em equipes de desenvolvimento de software. Minha abordagem se concentra em oferecer soluções eficazes e estratégias orientadas a resultados  de forma consistente e inovadora.</p>
            <div>
              <a href={cv} target="__blank" className="btn">Download CV</a>
            </div>
          </div>
        </div>
        <Arrow src="#experience"/>
      </div>
    </section>
  )
}
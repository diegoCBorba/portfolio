import './Experience.css'
import { SubTitle } from '../utils/SubTitle'

export function Experience(){
  return(
    <div id="experience">
      <div className="subtitles-container">
        <SubTitle>Sobre Minhas</SubTitle>
        <h1 className='title'>Experiências</h1>
      </div>
      <div className="experience-container">
        <span className='row-bar'/>
        <div className='education-container'>
          <span className='diamond'/>
          <div className="about-education">
            <p className="data-education">2021 - Now</p>
            <p className='description-education'>Bacharelado em Engenharia da computação</p>
            <p className='description-education'>IFPB</p>
          </div>
        </div>
        <div className='education-container'>
          <span className='diamond'/>
          <div className="about-education">
            <p className="data-education">2024</p>
            <p className='description-education'>Projeto de Extensão</p>
            <p className='description-education'>Avaliando Acessibilidade de Sites Institucionais</p>
          </div>
        </div>
      </div>
    </div>
  )
}


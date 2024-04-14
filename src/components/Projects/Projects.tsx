import './Projects.css'
import { SubTitle } from '../utils/SubTitle'
import { Carrossel } from '../utils/Carrossel'


export function Projects(){
  return(
    <div id="projects">
      <SubTitle>Sobre Meus</SubTitle>
      <h1 className='title'>Projetos</h1>
      <Carrossel/>
    </div>
  )
}


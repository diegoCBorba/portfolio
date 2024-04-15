import './Projects.css'
import { SubTitle } from '../utils/SubTitle'
import { Arrow } from '../utils/Arrow';
import { Table } from '../utils/table-project/Table';

export function Projects(){

  return(
    <section id="projects" className="project-desktop">
      <div className="container-section">
        <SubTitle>Sobre Meus</SubTitle>
        <h1 className='title'>Projetos</h1>
        <Table/>
        <Arrow src="#contacts"/>
      </div>
    </section>
  )
}

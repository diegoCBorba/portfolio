import './Projects.css'
import { ArticleProject } from '../utils/ArticleProject'
import Project1 from "../../assets/images/project-1.png"

export function Projects(){
  return (
    <section id='projects'>
      <p className='section__text__p1'>Olhe meus</p>
      <h1 className='title'>Projetos</h1>
      <div className='experience-details-container'>
        <div className='about-containers'>
          <ArticleProject title='Pass in' src={Project1}/>
          <ArticleProject title='Pass in' src={Project1}/>
          <ArticleProject title='Pass in' src={Project1}/>
        </div>
      </div>
      <a href="./#contact" className="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-down"><path d="m7 6 5 5 5-5"/><path d="m7 13 5 5 5-5"/></svg>
      </a>
    </section>
  )
}
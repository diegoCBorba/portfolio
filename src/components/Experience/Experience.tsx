import './Experience.css'
import { ArticleExperience } from '../utils/ArticleExperience'

export function Experience(){
  return(
    <section id="experience">
      <p className='section__text__p1'>Explore minhas</p>
      <h1 className='title'>Experiências</h1>
      <div className='experience-details-container'>
        <div className='about-containers'>
          <div className='details-container'>
            <h2 className='experience-sub-title'>Desenvolvimento Frontend</h2>
            <div className='article-container'>
              <ArticleExperience title='React' experience='Intermediário'/>
              <ArticleExperience title='JavaScript' experience='Intermediário'/>
              <ArticleExperience title='Typecript' experience='Intermediário'/>
              <ArticleExperience title='HTML5' experience='Avançado'/>
              <ArticleExperience title='CSS3' experience='Avançado'/>
            </div>
          </div>
          <div className='details-container'>
            <h2 className='experience-sub-title'>Desenvolvimento Backend</h2>
            <div className='article-container'>
              <ArticleExperience title='NodeJS' experience='Intermediário'/>
              <ArticleExperience title='Fastify' experience='Intermediário'/>
              <ArticleExperience title='Express' experience='Intermediário'/>
              <ArticleExperience title='PostgreSQL' experience='Intermediário'/>
              <ArticleExperience title='MySQL' experience='Intermediário'/>
              <ArticleExperience title='MongoDB' experience='Básico'/>
              <ArticleExperience title='Prisma' experience='Básico'/>
              <ArticleExperience title='Sequelize' experience='Básico'/>
            </div>
          </div>
        </div>
      </div>
      <a href="./#projects" className="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-down"><path d="m7 6 5 5 5-5"/><path d="m7 13 5 5 5-5"/></svg>
      </a>
    </section>
  )
}


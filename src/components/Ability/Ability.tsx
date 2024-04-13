import "./Ability.css"
import { Arrow } from '../utils/Arrow'
import { Experience } from '../Experience/Experience'
import { Skills } from '../Skills/Skills'
import { Projects } from "../Projects/Projects"

export function Ability(){
  return(
    <section>
      <div className="container-section">
        <div className="container-ability">
          <Experience/>
          <Projects/>
          <Skills/>
        </div>
        <Arrow src="#contacts"/>
      </div>
    </section>
  )
}

import "./Ability.css"
import { Arrow } from '../utils/Arrow'
import { Experience } from '../Experience/Experience'
import { Skills } from '../Skills/Skills'

export function Ability(){
  return(
    <section id="experience">
      <div className="container-section">
        <div className="container-ability">
          <Experience/>
          <Skills/>
        </div>
        <Arrow src="#projects"/>
      </div>
    </section>
  )
}

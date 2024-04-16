import { SubTitle } from "../utils/SubTitle";
import { CarouselProject } from "../utils/table-project/Carousel";

export function ProjectSlider(){
  return(
    <section id="projects-mobile" className="project-mobile">
      <div className="container-section">
        <SubTitle>Sobre Meus</SubTitle>
        <h1 className='title'>Projetos</h1>
        <CarouselProject/>
      </div>
    </section>
  )
}

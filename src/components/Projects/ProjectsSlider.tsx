import { Arrow } from "../utils/Arrow";
import { SubTitle } from "../utils/SubTitle";
import { data } from "../utils/dataProjects";

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

export function ProjectSlider(){
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 2,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }

  return(
    <section id="project" className="project-mobile">
    <div className="container-section">
      <SubTitle>Sobre Meus</SubTitle>
      <h1 className='title'>Projetos</h1>
      {/* <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={1000}
        centerMode={false}
        pauseOnHover
        rtl={false}
        shouldResetAutoplay
        slidesToSlide={2}
        swipeable
        >
          
        </Carousel> */}
        <div>

        </div>
      <Arrow src="#contacts"/>
    </div>
  </section>
  )
}

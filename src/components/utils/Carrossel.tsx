import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import project1 from "../../assets/images/projects/project-1.png"
import project2 from "../../assets/images/projects/project-2.png"

export function Carrossel(){
  const data = [
    {
      title: "Pass-in Web",
      img: project1,
      src: ""
    },
    {
      title: "DoisB Arquitetos",
      img: project2,
      src: ""
    },
    {
      title: "Pass-in Web",
      img: project1,
      src: ""
    },
    {
      title: "DoisB Arquitetos",
      img: project2,
      src: ""
    }
  ]

  const settings = {
    responsive: {
      desktopLarge: {
        breakpoint: { max: 3000, min: 1650 },
        items: 1,
        slidesToSlide: 1
      },
      desktop: {
        breakpoint: { max: 1650, min: 1575 },
        items: 2,
        slidesToSlide: 1
      },
      desktop2: {
        breakpoint: { max: 1575, min: 1000 },
        items: 1,
        slidesToSlide: 1
      },
      tablet: {
        breakpoint: { max: 1000, min: 900 },
        items: 2,
        slidesToSlide: 1
      },
      mobile: {
        breakpoint: { max: 900, min: 0 },
        items: 1,
        slidesToSlide: 1
      }
    },
    autoPlay: true,
    autoPlaySpeed: 3500,
    infinite: true,
    centerMode: false,
  }

  return(
    <Carousel {...settings} className="projects-container">
      {data.map((d, index) => (
      <div className="project-box">
          <img src={d.img} alt={` ${d.title} image`} key={index}/>
          <div className='about-project'>
            <h2>{d.title}</h2>
            <div className='project-btn'>
              <a href="" className='btn'>Github</a>
              <a href="" className='btn-2'>Live Demo</a>
            </div>
          </div>
      </div>
      ))}
    </Carousel>
  )
}

{/* <div className="projects-container">
  {data.map((d, index) => (
  <div className="project-box">
      <img src={d.img} alt={` ${d.title} image`} key={index}/>
      <div className='about-project'>
        <h2>{d.title}</h2>
        <div className='project-btn'>
          <a href="" className='btn'>Github</a>
          <a href="" className='btn-2'>Live Demo</a>
        </div>
      </div>
  </div>
  ))}
</div> */}
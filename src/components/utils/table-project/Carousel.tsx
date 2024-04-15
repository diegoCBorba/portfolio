import { useState } from "react";

import { motion } from "framer-motion";

import { data } from "../dataProjects";
import { ShowProject } from "./ShowProject";

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

function CustomArrow(){return (<></>)}

export function CarouselProject(){
  const [isHovered, setIsHovered] = useState(false);

  const responsive = {
    tablet: {
      breakpoint: {
        max: 1024,
        min: 620
      },
      items: 2,
    },
    mobile: {
      breakpoint: {
        max: 620,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 0
    },
  }
  
  return(
    <>
      <ShowProject
        className={isHovered ? "hovered" : "no-hovered"} 
        desktop={false}
      />
      <Carousel
        responsive={responsive}
        customLeftArrow={<CustomArrow/>}
        customRightArrow={<CustomArrow/>}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container-with-dots"
        dotListClass=""
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={10}
        pauseOnHover
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        className="projects-mobile-container"
        >
          {data.map((item, index) => (
            <a
            key={index} href={item.src} 
            target="_blank"
            className="mobile-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="picture-project"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundColor: item.background
                }}
                initial={{
                  backgroundSize: "77% 57%"
                }}
                whileHover={{
                  backgroundSize: "82% 62%"
                }}
              />
              <div className="about-project">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
      </Carousel>
    </>
  )
}
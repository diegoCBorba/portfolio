import './Projects.css'

import { SubTitle } from '../utils/SubTitle'
import { Arrow } from '../utils/Arrow';

import { Table } from '../utils/table-project/Table';
import { CarouselProject } from '../utils/table-project/Carousel';
import { motion } from 'framer-motion';

export function Projects(){
  return(
    <section id="projects" className="project">
      <motion.div className="container-section"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{type: "spring", delay: 0.1}}
      >
        <SubTitle>Sobre Meus</SubTitle>
        <h1 className='title'>Projetos</h1>
        <Table/>
        <CarouselProject/>
        <Arrow src="#contacts"/>
      </motion.div>
    </section>
  )
}

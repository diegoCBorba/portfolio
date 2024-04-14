import './Skills.css'
import { SubTitle } from '../utils/SubTitle'
import IconSkills from '../utils/iconSkills'


import express from "../../assets/images/icons/expresso-js.svg"
import git from "../../assets/images/icons/git.svg"
import javascript from "../../assets/images/icons/javascript.svg"
import mongodb from "../../assets/images/icons/mongodb.svg"
import mysql from "../../assets/images/icons/mysql.svg"
import node from "../../assets/images/icons/nodejs.svg"
import postgre from "../../assets/images/icons/postgreesql.svg"
import python from "../../assets/images/icons/python.svg"
import typescript from "../../assets/images/icons/typescript.svg"

export function Skills(){
  return(
    <div className="ability-about">
      <SubTitle>Sobre Minhas</SubTitle>
      <h1 className='title'>Habilidades</h1>
      <div className="skills-container">
        <IconSkills src={javascript}>JavaScript</IconSkills>
        <IconSkills src={typescript}>TypeScript</IconSkills>
        <IconSkills src={python}>Python</IconSkills>
        <IconSkills src={node}>NodeJS</IconSkills>
        <IconSkills src={express}>Express</IconSkills>
        <IconSkills src={git}>Git</IconSkills>
        <IconSkills src={postgre}>PostgreSQL</IconSkills>
        <IconSkills src={mongodb}>MongoDB</IconSkills>
        <IconSkills src={mysql}>MySQL</IconSkills>
      </div>
    </div>
  )
}


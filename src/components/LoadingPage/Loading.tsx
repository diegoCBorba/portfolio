import "./Loading.css"

import { motion } from "framer-motion"

export function PreLoader(){

  return(
    <motion.div className="loading-container"
    initial={{height: "100%"}}
    animate={{height: "0%"}}
    transition={{delay: 4, duration: 0.5}}
    >
      <div className="texts-container">
        <motion.span
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{type: "spring", delay:1}}
        >Developed</motion.span>
        <motion.span
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{type: "spring", delay:1.5}}
        >by</motion.span>
        <motion.span
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{type: "spring", delay:2}}
        >Diego Cardoso</motion.span>
      </div>
    </motion.div>
  )
}
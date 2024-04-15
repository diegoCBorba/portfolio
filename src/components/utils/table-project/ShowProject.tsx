import { motion } from "framer-motion"
import { useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"

interface projectProps{
  className: string,
  img?: string,
  background?: string,
  desktop: boolean,
}

export function ShowProject(props: projectProps){
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothOptions = {damping: 50, stiffness: 1000}
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  const cursorSize = props.desktop ? 400 : 70
  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e
    mouse.x.set(clientX - cursorSize/2)
    mouse.y.set(clientY - cursorSize/2)
  }

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);
    return () => {window.removeEventListener("mousemove", manageMouseMove)}
  });

  return(
    <>
      {props.desktop ? 
        <motion.div className={`${props.className} quadrado`}
          style={{left: mouse.x, top:mouse.y, 
            backgroundImage: `url(${props.img})`,
            backgroundColor: `${props.background}`
          }}
        >
          <motion.div
            style={{left: smoothMouse.x, top:smoothMouse.y}}
            className={`${props.className} quadrado-2`}
          >
            <div className="box">
              <p className={`${props.className} box-view`}>View</p>
            </div>
          </motion.div>
        </motion.div>    
        
        :

        <motion.div
          style={{left: smoothMouse.x, top:smoothMouse.y}}
          className={`${props.className} box-mobile`}
        >
          <p className={`${props.className} box-view`}>View</p>
        </motion.div>
      }
    </>
  )
}
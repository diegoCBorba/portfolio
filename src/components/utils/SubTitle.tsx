import { ReactNode } from "react"

interface props{
  children?: ReactNode
}

export function SubTitle(props: props){
  return(
    <div className="sub-title-container">
      <span></span>
      <p className="section__text__p1">{props.children}</p>
    </div>
  )
}
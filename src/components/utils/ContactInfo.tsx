import { ReactNode } from "react"

interface props{
  title: string,
  src: string,
  children?: ReactNode
}

export function ContactInfo(props: props){
  return(
    <div className="contact-info-container icon contact-icon">
      {props.children}
      <p><a href={props.src} target="_blank">{props.title}</a></p>
    </div>
  )
}
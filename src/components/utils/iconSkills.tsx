import { ReactNode } from "react"

interface props{
  src: string,
  children?: ReactNode
}


export default function IconSkills(props: props) {
  return (
      <div className="icon-container">
        <img src={props.src} alt="MySQL icon"/>
        <p>{props.children}</p>
      </div>
  );
}

import "./Footer.css"
import { NavLinks } from "../utils/NavLinks" 

export function Footer(){
  return(
    <footer>
        <nav>
          <NavLinks/>
        </nav>
        <p>Copyright &#169; 2024 | Diego Cardoso</p>
    </footer>
  )
}
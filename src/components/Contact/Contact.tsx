import "./Contact.css"
import { ContactInfo } from "../utils/ContactInfo"

export function Contact(){
  return(
    <section id="contact">
      <p className="section__text__p1">Entre em</p>
      <h1 className="title">Contato</h1>
      <div className="contact-info-upper-container">
        <ContactInfo 
        title="diegocardosobsantos@gmail.com"
        src="mailto:diegocardosobsantos@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </ContactInfo>
        <ContactInfo 
        title="Linkedin"
        src="https://www.linkedin.com/in/diego-cardoso-15a624220/">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </ContactInfo>
      </div>
    </section>
  )
}
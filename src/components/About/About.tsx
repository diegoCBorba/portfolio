import "./About.css"
import aboutPic from '../../assets/images/about-pic.jpg'

export function About(){
  return(
    <section id="about">
      <p className="section__text__p1">Conheça Mais</p>
      <p className="title">Sobre mim</p>

      <div className="section-container">
        <div className="section__pic-container">
          <img src={aboutPic} alt="Profile picture" className="about-pic"/>
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
              <h3>Experiência</h3>
              <p>Lorem ipsum dolor sit amet.<br/>2 years</p>
            </div>
            <div className="details-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>
              <h3>Formação</h3>
              <p>Engenharia da Computação - IFPB<br/> 2021 - 2025</p>
            </div>
          </div>
          <div className="text-container">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quidem ut sequi autem at, similique quisquam. Vitae, facilis. Vero harum possimus ea iste cumque, laborum optio eveniet esse architecto obcaecati voluptatum corrupti amet adipisci saepe sequi doloribus impedit! Reiciendis, optio. Laborum ipsam, eius totam nemo doloribus facere obcaecati suscipit laboriosam?</p>
          </div>
        </div>
      </div>
        <a href="./#experience" className="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-down"><path d="m7 6 5 5 5-5"/><path d="m7 13 5 5 5-5"/></svg>
        </a>
    </section>
  )
}
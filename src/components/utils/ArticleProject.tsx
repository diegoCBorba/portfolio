interface props{
  title: string,
  src: string
}

export function ArticleProject(props: props){
  return(
    <div className='details-container color-container'>
      <div className='article-container'>
        <img src={props.src} alt="Project 1" className='project-img'/>
      </div>
      <h2 className='experience-sub-title project-tile'>{props.title}</h2>
      <div className='btn-container'>
        <a data-back="github" data-front="github" href="https://github.com/diegoCBorba/pass-in-web" target="_blank" className="btn btn-color-1"/>
        <a data-back="Live Demo" data-front="Live Demo" href="https://github.com/diegoCBorba/pass-in-web" target="_blank" className="btn btn-color-2"/>
      </div>
    </div>
  )
}
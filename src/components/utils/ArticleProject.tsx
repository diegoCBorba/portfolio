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
        <button
        className='btn btn-color-2'
        onClick={() => location.href='https://github.com/diegoCBorba/pass-in-web'}>
          GitHub
        </button>
        <button
        className='btn btn-color-1 project-btn'
        onClick={() => location.href='https://github.com/diegoCBorba/pass-in-web'}>
          Live Demo
        </button>
      </div>
    </div>
  )
}
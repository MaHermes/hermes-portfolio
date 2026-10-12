import { Link } from "react-router-dom"

type ProjectCardProps = {
    title: string
    type: string
    description: string
    image: string
    imageAlt: string
    dualImage?: string
    to?: string
  }
  
  function ProjectCard({
    title,
    type,
    description,
    image,
    imageAlt,
    dualImage,
    to
  }: ProjectCardProps) {
    return (
        <article className="project-card">
          <Link
            to={to ?? "#"}
            className="project-card-link"
            onClick={(event) => {
              if (!to) event.preventDefault()
            }}
          >
            <div
              className={`project-image ${dualImage ? "project-image-dual" : ""}`}
            >
              <img src={image} alt={imageAlt} />
      
              {dualImage && (
                <img src={dualImage} alt={`${imageAlt} additional screenshot`} />
              )}
            </div>
      
            <div className="project-info">
              <p className="project-type">{type}</p>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </Link>
        </article>
      )
  }
  
  export default ProjectCard
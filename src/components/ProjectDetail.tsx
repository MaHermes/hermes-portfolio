
type ProjectLink = {
    label: string
    url: string
  }
  
  type ProjectDetailProps = {
    title: string
    subtitle: string
    description: string
    role?: string
    technologies?: string[]
    image?: string
    highlights?: string
    links?: ProjectLink[]
  }
  
  function ProjectDetail({
    title,
    subtitle,
    description,
    role,
    technologies,
    image,
    highlights,
    links
  }: ProjectDetailProps) {
    return (
      <main className="project-detail">
        <a className="back-link" href="/#projects">
          ← Back to projects
        </a>
  
        {image && (
          <div className="project-detail-image">
            <img src={image} alt={`${title} project artwork`} />
          </div>
        )}
  
        <header className="project-detail-header">
          <p className="section-label">{subtitle}</p>
          <h1>{title}</h1>
          <p className="project-detail-description">{description}</p>
  
          {role && (
            <div className="project-detail-meta">
              <h2>My Role</h2>
              <p>{role}</p>
            </div>
          )}
  
          {highlights && (
            <div className="project-detail-meta">
              <h2>Development Highlights</h2>
              <p>{highlights}</p>
            </div>
          )}
  
          {technologies && technologies.length > 0 && (
            <div className="project-detail-meta">
              <h2>Technologies</h2>
              <ul className="technology-list">
                {technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          )}
  
          {links && links.length > 0 && (
            <div className="project-detail-links">
              <h2>Further Reading</h2>
  
              {links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </header>
      </main>
    )
  }
  
  export default ProjectDetail
  
function ProjectCard({ project, isActive, onSelect, onOpenVideo }) {
  const handleOpenVideo = (event) => {
    event.stopPropagation();
    onOpenVideo(project);
  };

  return (
    <article
      className={`project-card ${isActive ? 'active' : ''}`}
      onClick={() => onSelect(project)}
    >
      <div className="project-thumb">
        <video
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          poster={project.imageUrl}
          aria-label={project.title}
        >
          <source src={project.videoUrl} type="video/mp4" />
          <source src={project.videoFallbackUrl} type="video/mp4" />
        </video>
      </div>
      <div className="project-content">
        <div className="project-meta">{project.category}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <button type="button" className="button tertiary" onClick={handleOpenVideo}>
          자세히 보기
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;

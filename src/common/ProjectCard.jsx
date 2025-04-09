function ProjectCard({ src, link, name, description }) {
  return (
    <a href={link} target="_blank">
      <img src={src} alt={`${name} logo`} className="hover" />
      <h3>{name}</h3>
      <p>{description}</p>
    </a>
  );
}

export default ProjectCard;

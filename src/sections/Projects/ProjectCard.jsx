import styles from "./ProjectsStyles.module.css";

function ProjectCard({src, linkCode, linkDemo, alt, title, desc}) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <a href={linkDemo} target="_blank">
        <img src={src} alt={alt} />
      </a>      
      <div className={styles.cardBtns}>
        <a href={linkCode} target="_blank">
          <button className="hover">Code</button>
        </a>
        <a href={linkDemo} target="_blank">
          <button className="hover">Demo</button>
        </a>
      </div>
      <p>{desc}</p>
    </div>
  )
};

export default ProjectCard;
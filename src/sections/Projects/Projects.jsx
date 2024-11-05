import styles from "./ProjectsStyles.module.css";
import inventoryAppLogo from "../../assets/inventory-app.png";
import onlineShopLogo from "../../assets/online-store-app.png";
import clubhouseLogo from "../../assets/clubhouse-app.png";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container} >
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={inventoryAppLogo}
                alt="Inventory app logo"
                link="#"
                title="School tech inventory app"
                desc="Inventory tracking app"
            />
            <ProjectCard 
                src={onlineShopLogo}
                alt="Online store logo"
                link="#"
                title="Online Store"
                desc="Online store app"
            />
            <ProjectCard 
                src={clubhouseLogo}
                alt="Clubhouse logo"
                link="#"
                title="Members only Clubhouse"
                desc="Web app with user authentication and authorization"
            />
        </div>
    </section>
  )
};

export default Projects;
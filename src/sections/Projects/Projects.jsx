import styles from "./ProjectsStyles.module.css";
import inventoryAppLogo from "../../assets/inventory-2.png";
import onlineShopLogo from "../../assets/online-store-2.png";
import clubhouseLogo from "../../assets/clubhouse-2.png";
import skyvaultApp from "../../assets/sky-vault.png";
import blogApp from "../../assets/blog.png";
import flowTrackApp from "../../assets/flow-track.png";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container} >
        <h1 className="sectionTitle">Projects</h1>
        <div className="noteParagraph">
            <strong>Please Note:</strong>
            Some apps may take up to a minute to start as they are hosted on a service that puts them to sleep during periods of inactivity. If an app doesn't work immediately, please wait 1 min and try again. Thank you for your patience!
            
        </div>
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={flowTrackApp}
                alt="Inventory App"
                linkCode={"https://github.com/jangmz/FlowTrack"}
                linkDemo={"https://flow-track.netlify.app/"}
                title={"Full Stack Inventory App"}
                desc={"App made with React, Express, Prisma, PostgreSQL, Bootstrap"}
            />
            <ProjectCard 
                src={blogApp}
                alt="Blog app"
                linkCode={"https://github.com/jangmz/blog-user-fe"}
                linkDemo={"https://blog-app23.netlify.app/"}
                title={"Full Stack Blog App"}
                desc={"App made with React, Express, Prisma, PostgreSQL, Bootstrap"}
            />
            <ProjectCard 
                src={onlineShopLogo}
                alt="Online store"
                linkCode="https://github.com/jangmz/infinity-online-shop"
                linkDemo="https://infinity-online-shop.netlify.app/"
                title="Online Store"
                desc="Online store app"
            />
        </div>
    </section>
  )
};

export default Projects;
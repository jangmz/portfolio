import styles from "./ProjectsStyles.module.css";
import inventoryAppLogo from "../../assets/inventory-2.png";
import onlineShopLogo from "../../assets/online-store-2.png";
import clubhouseLogo from "../../assets/clubhouse-2.png";
import skyvaultApp from "../../assets/sky-vault.png";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container} >
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={skyvaultApp}
                alt="SkyVault app"
                linkCode="https://github.com/jangmz/SkyVault"
                linkDemo="https://skyvault-production.up.railway.app"
                title="SkyVault Storage"
                desc="Cloud Storage"
            />
            <ProjectCard 
                src={inventoryAppLogo}
                alt="Inventory app"
                linkCode="https://github.com/jangmz/school-inventory-app"
                linkDemo="https://school-inventory-app.up.railway.app/"
                title="School tech inventory app"
                desc="Inventory tracking app"
            />
            <ProjectCard 
                src={onlineShopLogo}
                alt="Online store"
                linkCode="https://github.com/jangmz/infinity-online-shop"
                linkDemo="https://infinity-online-shop.netlify.app/"
                title="Online Store"
                desc="Online store app"
            />
            <ProjectCard 
                src={clubhouseLogo}
                alt="Clubhouse"
                linkCode="https://github.com/jangmz/members-only"
                linkDemo="https://members-only-clubhouse23.up.railway.app"
                title="Members only Clubhouse"
                desc="Web app with user authentication and authorization"
            />
        </div>
    </section>
  )
};

export default Projects;
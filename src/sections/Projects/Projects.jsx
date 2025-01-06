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
                linkDemo="https://skyvault-ppfk.onrender.com/sky-vault"
                title="SkyVault Storage"
                desc="Cloud storage made with Express, Prisma, PostgreSQL, Bootstrap"
            />
            <ProjectCard 
                src={inventoryAppLogo}
                alt="Inventory app"
                linkCode="https://github.com/jangmz/school-inventory-app"
                linkDemo="https://inventory-app-qvo9.onrender.com"
                title="Inventory App"
                desc="Inventory tracking app made with Express and PostgreSQL"
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
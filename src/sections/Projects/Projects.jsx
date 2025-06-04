import styles from "./ProjectsStyles.module.css";
import onlineShopLogo from "../../assets/online-store-2.png";
import blogApp from "../../assets/blog.png";
import flowTrackApp from "../../assets/flow-track.png";
import ProjectCard from "./ProjectCard";
import BillioApp from "../../assets/billio_dash.png";

function Projects() {
  return (
    <section id="projects" className={styles.container} >
        <h1 className="sectionTitle">Projects</h1>
        <div className="noteParagraph">
            <strong>Please Note:</strong>
            Some apps may take up to a minute to start as they are hosted on a service that puts them to sleep during periods of inactivity. If an app doesnt work immediately, please wait 1 min and try again. Thank you for your patience!
            
        </div>
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={BillioApp}
                alt="Billio App Screenshot"
                linkCode={"https://github.com/jangmz/billio"}
                linkDemo={"https://www.billio-app.com"}
                title={"Billio - Housing Expense Management App"}
                desc={"Full stack expense tracking application made with NextJS, MongoDB, DaisyUI, Tailwind"}
            />
            <ProjectCard 
                src={flowTrackApp}
                alt="FlowTrack - Inventory App"
                linkCode={"https://github.com/jangmz/FlowTrack"}
                linkDemo={"https://flow-track.netlify.app/"}
                title={"Inventory App"}
                desc={"Full stack inventory application made with React, Express, Prisma, PostgreSQL, Bootstrap"}
            />
            <ProjectCard 
                src={blogApp}
                alt="Blog app"
                linkCode={"https://github.com/jangmz/blog-user-fe"}
                linkDemo={"https://blog-app23.netlify.app/"}
                title={"Blog App"}
                desc={"Full stack blog application made with React, Express, Prisma, PostgreSQL, Bootstrap"}
            />
            <ProjectCard 
                src={onlineShopLogo}
                alt="Online store"
                linkCode="https://github.com/jangmz/infinity-online-shop"
                linkDemo="https://infinity-online-shop.netlify.app/"
                title="Online Store"
                desc="Front end made with React"
            />
        </div>
    </section>
  )
};

export default Projects;
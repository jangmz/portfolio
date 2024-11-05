import styles from "./SkillsStyles.module.css";
import SkillList from "./SkillList";

function Skills() {
    
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillList skill="HTML" />
            <SkillList skill="CSS"  />
            <SkillList skill="JavaScript" />
            <SkillList skill="Node" />
            <SkillList skill="Python" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList skill="React" />
            <SkillList skill="Express" />
            <SkillList skill="Bootstrap" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList skill="Git" />
            <SkillList skill="SQL(PostgreSQL, MySQL)" />
            <SkillList skill="Webpack" />
            <SkillList skill="Vite" />
        </div>
    </section>
  )
};

export default Skills;
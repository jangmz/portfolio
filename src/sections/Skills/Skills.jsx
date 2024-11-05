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
            <SkillList skill="Webpack" />
            <SkillList skill="Vite" />
            <SkillList skill="Git" />
        </div>
        <hr />
    </section>
  )
};

export default Skills;
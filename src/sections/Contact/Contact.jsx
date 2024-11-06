import ContactInput from "./ContactInput";
import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <h1 className="sectionTitle">Contact</h1>
        <form action="https://formspree.io/f/xbljogwq" method="post">
            <ContactInput 
                name="name"
                placeholder="Name"
                inputType="text"
            />
            <ContactInput 
                name="email"
                placeholder="Email"
                inputType="email"
            />
            <div className="formGroup">
                <label htmlFor="message" hidden>Message</label>
                <textarea name="message" id="message" placeholder="Message" required ></textarea>
            </div>
            <input type="submit" value="Submit" className="hover btn" />
        </form>
    </section>
  )
}

export default Contact
import ContactUsForm from "components/feature/contactUsForm";

import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.contactBox} id="contactUs">
      <div>
        <ContactUsForm />
      </div>
    </section>
  );
}

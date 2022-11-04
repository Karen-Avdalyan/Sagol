import AboutIntro from "components/feature/about/intro";
import AboutUs from "components/feature/about/aboutUs";
import OurTechnology from "components/feature/ourTechnology";
import ContactUsForm from "components/feature/contactUsForm";

import styles from './about.module.scss';

export default function About() {
  return (
    <div className={styles.aboutUsContainer}>
      <AboutIntro />
      <AboutUs />
      <OurTechnology />
      <ContactUsForm />
    </div>
  );
};

import About from "components/feature/home/about";
import Contact from "components/feature/home/contact";
import OurProducts from "components/feature/home/ourProducts";
import WorkWithUs from "components/feature/workWithUs";
import OurServices from "components/feature/home/ourServices";
import Intro from "components/shared/intro";
import GoogleMaps from "components/shared/googleMap";

export default function Home() {
  return (
    <div>
      <Intro />
      <About />
      <OurProducts />
      <OurServices />
      <WorkWithUs />
      <Contact />
      <GoogleMaps />
    </div>
  );
}

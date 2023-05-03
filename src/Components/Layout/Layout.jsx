import Navbar from "../Navbar/Navbar.jsx";
import Carosuel from "../Carosuel/Carosuel.jsx";
import About from "../About/About.jsx";
import Sponsor from "../Sponsor/Sponsor.jsx";
import Products from "../Products/Products.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
import ScrollToTop from "react-scroll-to-top";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Carosuel />
      <About />
      <Sponsor />
      <Products />
      <Contact />
      <Footer />
      <ScrollToTop
        smooth
        component={
          <i className="bi bi-rocket-fill" style={{ color: "#4b93ff" }}></i>
        }
      />
    </>
  );
}

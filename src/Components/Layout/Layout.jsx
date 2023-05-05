import Navbar from "../Navbar/Navbar.jsx";
import Carosuel from "../Carosuel/Carosuel.jsx";
import About from "../About/About.jsx";
import Sponsor from "../Sponsor/Sponsor.jsx";
import Products from "../Products/Products.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
import ScrollToTop from "react-scroll-to-top";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Layout() {
  let [t, i18n] = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("lang") || "ar")

  function loadRTLFile() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./src/rtl.css";
    document.head.appendChild(link);
  }

  function unloadRTLFile() {
    const link = document.querySelector('link[href="./src/rtl.css"]');
    if (link) {
      link.parentNode.removeChild(link);
    }
  }

  function changeLanguage(lang) {
    if (lang === "en") {
      unloadRTLFile();
    }
    if (lang === "ar") {
      loadRTLFile();
    }
    i18n.changeLanguage(lang);
  }

  useEffect(() => {
    changeLanguage(localStorage.getItem("lang"));
  }, []);

  return (
    <>
      <Navbar loadRTLFile={loadRTLFile} unloadRTLFile={unloadRTLFile} />
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

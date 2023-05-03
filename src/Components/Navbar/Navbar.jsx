import style from "./Navbar.module.css";
import logo from "../../assets/images/logo.svg";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [t, i18n] = useTranslation();

  console.log(i18n.language);

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

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${style.nav} position-fixed shadow-sm`}
      >
        <div className="container">
          <a className={`navbar-brand ${style.logo}`} href="/">
            <img src={logo} alt="Cladex Paper Logo" />
          </a>

          <div className="buttons-group d-flex justify-content-center align-items-center">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list fs-3"></i>
            </button>
            {i18n.language === "en" && (
              <button
                className="btn btn-sm btn-outline-primary mx-3"
                onClick={() => {
                  i18n.changeLanguage("ar");
                  loadRTLFile();
                }}
              >
                <i className="bi bi-translate me-2"></i>
                العربية
              </button>
            )}

            {i18n.language === "ar" && (
              <button
                className="btn btn-sm btn-outline-primary mx-3"
                onClick={() => {
                  i18n.changeLanguage("en");
                  unloadRTLFile();
                }}
              >
                <i className="bi bi-translate me-2 language"></i>
                English
              </button>
            )}
          </div>

          <div
            className="collapse navbar-collapse me-3"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link active ${style["nav-link"]}`}
                  aria-current="page"
                  href="#home"
                >
                  {t("navbar", { returnObjects: true })[0]}
                </a>
              </li>
              <li className="nav-item ">
                <a className={`nav-link ${style["nav-link"]}`} href="#about">
                  {t("navbar", { returnObjects: true })[1]}
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${style["nav-link"]}`} href="#products">
                  {t("navbar", { returnObjects: true })[2]}
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${style["nav-link"]}`} href="#contact">
                  {t("navbar", { returnObjects: true })[3]}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

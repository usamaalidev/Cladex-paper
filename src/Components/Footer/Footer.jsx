import style from "./Footer.module.css";
import logo from "../../assets/images/logo-without-text.svg";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [t, i18n] = useTranslation();
  return (
    <>
      <footer className={`${style.footer}`}>
        <div className="container px-1 py-5">
          <div className="row g-4">
            <div className="col-lg-4 px-4 about">
              <div className="brand d-flex gap-2 pb-3">
                <img src={logo} alt="Cladex Paper Logo" />
                <h3 className="fw-bolder">
                  {t("footer", { returnObjects: true }).about.title}
                </h3>
              </div>
              <p className="m-0 lh-base">
                {t("footer", { returnObjects: true }).about.description}
              </p>

              <h3 className="my-3">
                {t("footer", { returnObjects: true }).socialMedia.title}
              </h3>
              <ul className="social list-unstyled d-flex flex-wrap gap-1">
                <li>
                  <a
                    href="https://www.facebook.com/Cladex.Paper.Egypt"
                    className="facebook"
                  >
                    <i className="bi bi-facebook mx-2"></i>
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/Cladex.Paper.Egypt"
                    className="twitter"
                  >
                    <i className="bi bi-twitter mx-1"></i> Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/Cladex.Paper.Egypt"
                    className="pinterest"
                  >
                    <i className="bi bi-pinterest mx-1"></i> Pinterest
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/Cladex.Paper.Egypt"
                    className="youtube"
                  >
                    <i className="bi bi-youtube mx-1"></i> Youtube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/Cladex.Paper.Egypt"
                    className="linkedin"
                  >
                    <i className="bi bi-linkedin mx-1"></i> Linkedin
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 px-4 links">
              <h3>
                {" "}
                {t("footer", { returnObjects: true }).importantLinks.title}
              </h3>
              <ul className="py-3">
                <li>
                  <a href="#about">
                    <i className="bi bi-chevron-right me-1"></i>
                    {
                      t("footer", { returnObjects: true }).importantLinks
                        .links[0]
                    }
                  </a>
                </li>
                <li>
                  <a href="#sponsor">
                    <i className="bi bi-chevron-right me-1"></i>
                    {
                      t("footer", { returnObjects: true }).importantLinks
                        .links[1]
                    }
                  </a>
                </li>
                <li>
                  <a href="#products">
                    <i className="bi bi-chevron-right me-1"></i>
                    {
                      t("footer", { returnObjects: true }).importantLinks
                        .links[2]
                    }
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <i className="bi bi-chevron-right me-1"></i>
                    {
                      t("footer", { returnObjects: true }).importantLinks
                        .links[3]
                    }
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 px-4 contact-details">
              <h3>
                {t("footer", { returnObjects: true }).contactDetails.title}
              </h3>
              <ul className="py-3">
                <li className="d-flex gap-2 align-items-center">
                  <i className="bi bi-geo-alt-fill"></i>
                  <span>
                    {
                      t("footer", { returnObjects: true }).contactDetails
                        .address
                    }
                  </span>
                </li>
                <li className="d-flex gap-2 align-items-center">
                  <i className="bi bi-telephone-fill"></i>
                  <a href="tel:+201099986330">
                    {t("footer", { returnObjects: true }).contactDetails.phone}
                  </a>
                </li>
                <li className="d-flex gap-2 align-items-center">
                  <i className="bi bi-envelope"></i>
                  <a href="mailto:info@cladex-paper.com">
                    {t("footer", { returnObjects: true }).contactDetails.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

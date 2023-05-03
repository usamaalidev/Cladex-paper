import style from "./About.module.css";
import blackAndWhiteLogo from "../../assets/images/logo-black-and-white.svg";
import image_1 from "../../assets/images/about/img-1.png";
import image_2 from "../../assets/images/about/img-2.png";
import image_3 from "../../assets/images/about/img-3.png";
import { useTranslation } from "react-i18next";
export default function About() {
  const [t, i18next] = useTranslation();
  return (
    <>
      <section id="about">
        <div className="container py-5">
          <div className={`${style["circular-animation"]} mb-4`}>
            <div className="circle-lg mx-auto">
              <div className="circle-sm">
                <img
                  src={blackAndWhiteLogo}
                  alt="Cladex Black and White Logo"
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="mb-3 fw-bold">
                👋 {t("about", { returnObjects: true }).title}
              </h2>
              <p className="text-muted fs-5">
                {t("about", { returnObjects: true }).description}
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row g-4 align-items-center">
                <div className="col-md-6">
                  <img src={image_1} alt="" />
                </div>
                <div className="col-md-6 d-flex gap-4 flex-column">
                  <img src={image_2} alt="" />
                  <img src={image_3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

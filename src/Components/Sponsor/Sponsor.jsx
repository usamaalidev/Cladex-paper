import style from "./Sponsor.module.css";
import atexco from "../../assets/images/sponsor/atexco.png";
import dgi from "../../assets/images/sponsor/dgi.svg";
import efi from "../../assets/images/sponsor/efi.png";
import epson from "../../assets/images/sponsor/epson.svg";
import fedar from "../../assets/images/sponsor/fedar.png";
import homer from "../../assets/images/sponsor/homer.png";
import mimaki from "../../assets/images/sponsor/mimaki.svg";
import msPrinting from "../../assets/images/sponsor/ms-printing-solutions.png";
import mutoh from "../../assets/images/sponsor/mutoh.svg";
import xli from "../../assets/images/sponsor/xli.png";
import { useTranslation } from "react-i18next";
export default function Sponsor() {
  const [t, i18next] = useTranslation();
  return (
    <>
      <section id="sponsor" className="bg-section">
        <div className="container py-4">
          <div className="main-title">
            <p>
              {t("parteners", { returnObjects: true }).title}{" "}
              <span>{t("parteners", { returnObjects: true }).highlight}</span>
            </p>
            <h2>{t("parteners", { returnObjects: true }).description}</h2>
          </div>
          <div
            className={`${style["sponsor-cards"]} row justify-content-center`}
          >
            <div className="col-lg-1 col-md-2 col-sm-2 col-3 d-flex justify-content-center align-items-center">
              <img src={atexco} alt="atexco Logo" />
            </div>
            <div className="col-lg-1 col-md-2 col-sm-2 col-3 d-flex justify-content-center align-items-center">
              <img src={dgi} className="w-75" alt="dgi Logo" />
            </div>
            <div className="col-lg-1 col-md-2 col-sm-2 col-3 d-flex justify-content-center align-items-center">
              <img src={efi} alt="efi Logo" />
            </div>
            <div className="col-lg-1 col-md-2 col-sm-2 col-3 d-flex justify-content-center align-items-center">
              <img src={epson} alt="epson Logo" />
            </div>
            <div className="col-lg-1 col-md-2 col-sm-2 col-3 d-flex justify-content-center align-items-center">
              <img src={fedar} alt="fedar Logo" />
            </div>
            <div className="col-lg-1 col-md-2 col-sm-2 col-3 d-flex justify-content-center align-items-center">
              <img src={homer} alt="homer Logo" />
            </div>
            <div className="col-lg-1 col-md-2 col-sm-2 col-3 d-flex justify-content-center align-items-center">
              <img src={mimaki} alt="mimaki Logo" />
            </div>
            <div className="col-lg-1 col-md-2 col-sm-2 col-3 d-flex justify-content-center align-items-center">
              <img
                src={msPrinting}
                className="w-75"
                alt="ms Printing solutions Logo"
              />
            </div>
            <div className="col-lg-1 col-md-2 col-sm-2 col-3 d-flex justify-content-center align-items-center">
              <img src={mutoh} alt="mutoh Logo" />
            </div>
            <div className="col-lg-1 col-md-2 col-sm-2 col-3 d-flex justify-content-center align-items-center">
              <img src={xli} alt="xli Logo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

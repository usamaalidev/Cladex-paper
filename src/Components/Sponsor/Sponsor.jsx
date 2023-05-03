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
export default function Sponsor() {
  return (
    <>
      <section id="sponsor">
        <div className="container py-4">
          <h2 className="text-center fw-bold">Our Papers Running On</h2>
          <div
            className={`${style["sponsor-cards"]} row justify-content-between`}
          >
            <div className="col-md-1 d-flex justify-content-center align-items-center">
              <img src={atexco} alt="atexco Logo" />
            </div>
            <div className="col-md-1 d-flex justify-content-center align-items-center">
              <img src={dgi} className="w-75" alt="dgi Logo" />
            </div>
            <div className="col-md-1 d-flex justify-content-center align-items-center">
              <img src={efi} alt="efi Logo" />
            </div>
            <div className="col-md-1 d-flex justify-content-center align-items-center">
              <img src={epson} alt="epson Logo" />
            </div>
            <div className="col-md-1 d-flex justify-content-center align-items-center">
              <img src={fedar} alt="fedar Logo" />
            </div>
            <div className="col-md-1 d-flex justify-content-center align-items-center">
              <img src={homer} alt="homer Logo" />
            </div>
            <div className="col-md-1 d-flex justify-content-center align-items-center">
              <img src={mimaki} alt="mimaki Logo" />
            </div>
            <div className="col-md-1 d-flex justify-content-center align-items-center">
              <img
                src={msPrinting}
                className="w-75"
                alt="ms Printing solutions Logo"
              />
            </div>
            <div className="col-md-1 d-flex justify-content-center align-items-center">
              <img src={mutoh} alt="mutoh Logo" />
            </div>
            <div className="col-md-1 d-flex justify-content-center align-items-center">
              <img src={xli} alt="xli Logo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

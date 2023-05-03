import style from "./Carosuel.module.css";
import image_1 from "../../assets/images/carosuel/test.png";
import image_2 from "../../assets/images/carosuel/test2.png";
import { useTranslation } from "react-i18next";
export default function Carosuel() {
  const [t, i18n] = useTranslation();
  return (
    <>
      <div id="home" className="carousel slide vh-100">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#home"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#home"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#home"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner h-100">
          <div
            className={`carousel-item active ${style.item}`}
            data-bs-interval="1000"
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-5">
                  <h2 className="h1 fw-bold">
                    {t("mainCarosuel", { returnObjects: true }).item1.title}
                  </h2>
                  <p className="lh-base text-muted fs-5">
                    {
                      t("mainCarosuel", { returnObjects: true }).item1
                        .description
                    }
                  </p>
                </div>
                <div className="col-xl-7">
                  <img src={image_1} />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`carousel-item ${style.item}`}
            data-bs-interval="2000"
          >
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-5">
                  <h2 className="h1 fw-bold">
                    {t("mainCarosuel", { returnObjects: true }).item1.title}
                  </h2>
                  <p className="lh-base text-muted fs-5">
                    {
                      t("mainCarosuel", { returnObjects: true }).item1
                        .description
                    }
                  </p>
                </div>
                <div className="col-xl-7 d-flex justify-content-center">
                  <img src={image_2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={`carousel-item ${style.item}`}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <h2 className="h1 fw-bold">
                    {t("mainCarosuel", { returnObjects: true }).item1.title}
                  </h2>
                  <p className="lh-base fs-5">
                    {
                      t("mainCarosuel", { returnObjects: true }).item1
                        .description
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className={`carousel-control-prev ${style["btn-control"]}`}
          type="button"
          data-bs-target="#home"
          data-bs-slide="prev"
        >
          <i className="bi bi-chevron-left prev-icon"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className={`carousel-control-next ${style["btn-control"]}`}
          type="button"
          data-bs-target="#home"
          data-bs-slide="next"
        >
          <i className="bi bi-chevron-right next-icon"></i>

          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

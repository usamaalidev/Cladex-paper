import style from "./Item.module.css";
import logoWhite from "../../assets/images/logo-white.svg";
import { useTranslation } from "react-i18next";
export default function Item({ title, imgSrc }) {
  const [t, i18next] = useTranslation();

  return (
    <>
      <div className={`${style.card} pointer`}>
        <div className={`${style.content}`}>
          <div className={`${style.back}`}>
            <div className={`${style["back-content"]}`}>
              <img src={logoWhite} />
              <strong>
                {t("products", { returnObjects: true })["back-card"].hover}
              </strong>
            </div>
          </div>
          <div className={`${style.front}`}>
            <img src={imgSrc} className="" />
            <div className={`${style["front-content"]}`}>
              <small className={`${style.badge}`}>
                {t("products", { returnObjects: true })["front-card"].badge}
              </small>
              <div className={`${style.description}`}>
                <div className={`${style.title}`}>
                  <p className={`${style.title}`}>
                    <strong className="fs-6">{title}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

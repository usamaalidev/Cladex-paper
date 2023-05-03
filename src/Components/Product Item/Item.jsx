import style from "./Item.module.css";
import pizzaSvg from "../../assets/pizza.svg";
export default function Item() {
  return (
    <>
      <div className={`${style.card}`}>
        <div className={`${style.content}`}>
          <div className={`${style.back}`}>
            <div className={`${style["back-content"]}`}>
              <img src={pizzaSvg} alt="" />
              <strong>Hover Me</strong>
            </div>
          </div>
          <div className={`${style.front}`}>
            <div className={`${style.img}`}>
              <div className={`${style.circle}`}></div>
              <div className={`${style.circle}`} id="right"></div>
              <div className={`${style.circle}`} id="bottom"></div>
            </div>

            <div className={`${style["front-content"]}`}>
              <small className={`${style.badge}`}>Pasta</small>
              <div className={`${style.description}`}>
                <div className={`${style.title}`}>
                  <p className={`${style.title}`}>
                    <strong>Spaguetti Bolognese</strong>
                  </p>
                </div>
                <p className={`${style["card-footer"]}`}>
                  30 Mins &nbsp; | &nbsp; 1 Serving
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

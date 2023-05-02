import style from "./Carosuel.module.css";
import { register } from "swiper/element/bundle";
register();
import image_1 from "../../assets/images/carosuel/green-environment.jpg";
import image_2 from "../../assets/images/carosuel/at-paper-making-factory.jpg";
import image_3 from "../../assets/images/carosuel/cmyk-printing.jpg";

export default function Carosuel() {
  return (
    <>
      <div className="vh-100">
        <swiper-container effect="slide" pagination="true">
          <swiper-slide>
            {/* <img src={image_1} alt="" className={`${style["carosuel-img"]}`} /> */}
            <h2>الصفحة الرئيسية</h2>
          </swiper-slide>
          <swiper-slide>
            <img src={image_2} alt="" className={`${style["carosuel-img"]}`} />
          </swiper-slide>
          <swiper-slide>
            <img src={image_3} alt="" className={`${style["carosuel-img"]}`} />
          </swiper-slide>
        </swiper-container>
      </div>
    </>
  );
}

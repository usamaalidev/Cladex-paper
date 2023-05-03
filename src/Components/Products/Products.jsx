import { register } from "swiper/element/bundle";
import "swiper/swiper-bundle.min.css";
import style from "./Products.module.css";
import products_1 from "../../assets/images/products/tortilla.jpg";
import Item from "../Product Item/Item.jsx";
register();

export default function Products() {
  return (
    <>
      <section id="products" className={`${style.products} bg-section`}>
        <div className="container py-5">
          <swiper-container pagination="true" slides-per-view="4" dir="rtl">
            <swiper-slide>
              <Item />
            </swiper-slide>
            <swiper-slide>
              <Item />
            </swiper-slide>
            <swiper-slide>
              <Item />
            </swiper-slide>
            <swiper-slide>
              <Item />
            </swiper-slide>
            <swiper-slide>
              <Item />
            </swiper-slide>
          </swiper-container>
        </div>
      </section>
    </>
  );
}

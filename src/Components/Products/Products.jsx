import { register } from "swiper/element/bundle";
import "swiper/swiper-bundle.min.css";
import style from "./Products.module.css";
import foodPaper from "../../assets/images/products/food-paper.jpg";
import textilePrintingPaper from "../../assets/images/products/textile-printing-paper.jpg";
import protectionPaper from "../../assets/images/products/protection-paper.jpg";
import uncoatedPaper from "../../assets/images/products/uncoated-paper.jpg";
import specialtyPapers from "../../assets/images/products/specialty-papers.jpg";
import Item from "../Product Item/Item.jsx";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
register();

export default function Products() {
  const [t, i18next] = useTranslation();

  useEffect(() => {
    // swiper element
    const swiperEl = document.querySelector("swiper-container");

    // swiper parameters
    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        690: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1350: {
          slidesPerView: 4,
        },
      },
      on: {
        init() {
          // ...
        },
      },
    };

    // now we need to assign all parameters to Swiper element
    Object.assign(swiperEl, swiperParams);

    // and now initialize it
    swiperEl.initialize();
  }, []);
  return (
    <>
      <section id="products" className={`${style.products}`}>
        <div className="container py-5">
          <div className="main-title mb-5">
            <h2>{t("products", { returnObjects: true }).title}</h2>
            <p>
              {t("products", { returnObjects: true })["desc-part1"]}
              <span>{t("products", { returnObjects: true }).highlight}</span>
              {t("products", { returnObjects: true })["desc-part2"]}
            </p>
          </div>{" "}
          <swiper-container init="false">
            <swiper-slide>
              <Item
                title={
                  t("products", { returnObjects: true })["front-card"]
                    .ourProducts[0]
                }
                imgSrc={foodPaper}
              />
            </swiper-slide>
            <swiper-slide>
              <Item
                title={
                  t("products", { returnObjects: true })["front-card"]
                    .ourProducts[1]
                }
                imgSrc={textilePrintingPaper}
              />
            </swiper-slide>
            <swiper-slide>
              <Item
                title={
                  t("products", { returnObjects: true })["front-card"]
                    .ourProducts[2]
                }
                imgSrc={specialtyPapers}
              />
            </swiper-slide>
            <swiper-slide>
              <Item
                title={
                  t("products", { returnObjects: true })["front-card"]
                    .ourProducts[3]
                }
                imgSrc={uncoatedPaper}
              />
            </swiper-slide>
            <swiper-slide>
              <Item
                title={
                  t("products", { returnObjects: true })["front-card"]
                    .ourProducts[4]
                }
                imgSrc={protectionPaper}
              />
            </swiper-slide>
          </swiper-container>
        </div>
      </section>
    </>
  );
}

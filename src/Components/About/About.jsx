import style from "./About.module.css";
import blackAndWhiteLogo from "../../assets/images/logo-black-and-white.svg";
import image_1 from "../../assets/images/about/img-1.png";
import image_2 from "../../assets/images/about/img-2.png";
import image_3 from "../../assets/images/about/img-3.png";
export default function About() {
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
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="mb-3 fw-bold">👋 About Us</h2>
              <p className="text-muted">
                Cladex Paper's website showcases all our paper grades, their
                quality, and operational settings. We're a leading manufacturer
                committed to providing high-quality paper products and excellent
                service. Our website offers detailed information to help you
                make an informed decision about which paper is best for you.
                We're transparent and responsive to our customers, and we look
                forward to doing business with you.
              </p>
            </div>
            <div className="col-md-6">
              <div className="row align-items-center">
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

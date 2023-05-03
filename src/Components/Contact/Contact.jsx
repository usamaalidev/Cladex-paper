import { useTranslation } from "react-i18next";
import style from "./Contact.module.css";
export default function Contact() {
  const [t, i18next] = useTranslation();
  return (
    <>
      <section id="contact" className={`${style.contact} py-5 bg-section `}>
        <div className="container">
          <div className="main-title pb-4">
            <h2> {t("contact", { returnObjects: true }).title}</h2>
            <p>
              {t("contact", { returnObjects: true }).description}{" "}
              <span>{t("contact", { returnObjects: true }).highlight} </span>
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2718.9509517454594!2d31.772711357031415!3d30.13748696804562!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457f11a4a179afb%3A0x978943f9b73765d3!2z2ajZoNmg2YHYr9in2YYg2YXYr9mK2YbYqSDYqNiv2LE!5e0!3m2!1sar!2seg!4v1683047403315!5m2!1sar!2seg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="details">
            <div className="address">
              <div className="icon mx-2">
                <i className="bi bi-map"></i>
              </div>
              <div className="address-content">
                <h3>
                  {t("contact", { returnObjects: true }).details.address.title}
                </h3>
                <p>
                  {t("contact", { returnObjects: true }).details.address.info}
                </p>
              </div>
            </div>
            <div className="email">
              <div className="icon mx-2">
                <i className="bi bi-envelope"></i>
              </div>
              <div className="email-content">
                <h3>
                  {t("contact", { returnObjects: true }).details.email.title}
                </h3>
                <a
                  href="mailto:info@cladex-paper.com"
                  className="text-muted text-decoration-none fw-bold"
                >
                  {t("contact", { returnObjects: true }).details.email.info}
                </a>
              </div>
            </div>
            <div className="phone">
              <div className="icon mx-2">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div className="phone-content">
                <h3>
                  {" "}
                  {t("contact", { returnObjects: true }).details.phone.title}
                </h3>
                <a
                  href="tel:+201099986330"
                  className="text-muted text-decoration-none fw-bold"
                >
                  {t("contact", { returnObjects: true }).details.phone.info}
                </a>
              </div>
            </div>
            <div className="opening-hours">
              <div className="icon mx-2">
                <i className="bi bi-share-fill"></i>
              </div>
              <div className="opening-content">
                <h3>
                  {t("contact", { returnObjects: true }).details.time.title}
                </h3>
                <p>
                  <strong>
                    {
                      t("contact", { returnObjects: true }).details.time
                        .openingDay
                    }
                  </strong>
                  {t("contact", { returnObjects: true }).details.time.openTime}
                  <strong>
                    {
                      t("contact", { returnObjects: true }).details.time
                        .closingDay
                    }
                  </strong>
                  {t("contact", { returnObjects: true }).details.time.closeTime}
                </p>
              </div>
            </div>
          </div>
          <form>
            <div className="input-group">
              <input
                type="text"
                placeholder={
                  t("contact", { returnObjects: true }).placeholders.name
                }
                name="name"
              />
              <input
                type="email"
                placeholder={
                  t("contact", { returnObjects: true }).placeholders.email
                }
                name="email"
              />
            </div>
            <input
              type="text"
              placeholder={
                t("contact", { returnObjects: true }).placeholders.subject
              }
              name="subject"
            />
            <textarea
              placeholder={
                t("contact", { returnObjects: true }).placeholders.message
              }
              name="message"
            ></textarea>
            <button className="btn btn-main" type="submit">
              {t("contact", { returnObjects: true }).submit}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

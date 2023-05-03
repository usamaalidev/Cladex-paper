import style from "./contact.module.css";
export default function Contact() {
  return (
    <>
      <section id="contact" className={`${style.contact} py-4`}>
        <div className="container">
          <div className="main-title">
            <h2>CONTACT</h2>
            <p>
              Need Help ? <span> Contact Us </span>
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
              <div className="icon">
                <i className="fa-regular fa-map"></i>
              </div>
              <div className="address-content">
                <h3>Our Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            <div className="email">
              <div className="icon">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="email-content">
                <h3>Email Us</h3>
                <a href="mailto:contact@example.com">contact@example.com </a>
              </div>
            </div>
            <div className="phone">
              <div className="icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="phone-content">
                <h3>Call Us</h3>
                <a href="tel:+1 5589 55488 55">+1 5589 55488 55 </a>
              </div>
            </div>
            <div className="opening-hours">
              <div className="icon">
                <i className="fa-solid fa-share-nodes"></i>
              </div>
              <div className="opening-content">
                <h3>Opening Hours</h3>
                <p>
                  <strong>Mon-Sat:</strong> 11AM - 23PM; <strong>Sunday</strong>{" "}
                  : Closed
                </p>
              </div>
            </div>
          </div>
          <form>
            <div className="input-group">
              <input type="text" placeholder="Your Name" name="name" />
              <input type="email" placeholder="Your Email" name="email" />
            </div>
            <input type="text" placeholder="Subject" name="subject" />
            <textarea placeholder="Message" name="message"></textarea>
            <button className="btn btn-main" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

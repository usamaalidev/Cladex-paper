import style from "./Navbar.module.css";
import logo from "../../assets/images/logo.svg";

export default function Navbar() {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${style.nav} position-fixed`}>
        <div className="container">
          <a className={`navbar-brand ${style.logo}`} href="/">
            <img src={logo} alt="Cladex Paper Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse me-3"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" to="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Cladex
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>

            <select className="form-select" aria-label="Select a Language">
              <option selected disabled>
                Select...
              </option>
              <option defaultValue="en">English</option>
              <option defaultValue="ar">العربية</option>
            </select>
          </div>
        </div>
      </nav>
    </>
  );
}

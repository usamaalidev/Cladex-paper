import style from "./Dashboard.module.css";
import ProductTable from "../../Components/ProductTable/ProductTable.jsx";
import logo from "../../assets/images/logo-without-text.svg";

export default function Dashboard() {
  return (
    <>
      <main className={`${style["dashboard"]} p-5`}>
        <div className="container p-4 rounded-5">
          <div className="row">
            <aside className={`${style.sidebar} col-lg-2`}>
              <a
                className={`${style.logo} d-flex gap-2 justify-content-center align-items-center`}
                href="#"
              >
                <img src={logo} alt="Cladex Paper Logo" />
                <h1> Cladex Paper</h1>
              </a>
              <div className={`${style["side-wrapper"]}`}>
                <div className={`${style["side-title"]}`}>MENU</div>
                <div className={`${style["side-menu"]}`}>
                  <a className={`${style["sidebar-link"]} is-active`} href="#">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.135 20.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 00-3.949.072L3.467 7.965A2.474 2.474 0 002.5 9.867v8.702C2.5 20.464 4.047 22 5.956 22h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z" />
                    </svg>
                    Products
                  </a>
                </div>
              </div>
            </aside>
            <section className="col-lg-10">
              <div className="new-product my-3 d-flex justify-content-between align-items-center">
                <h2 className="fw-bold p-2">Products</h2>
                <button className="btn btn-main">
                  <i className="bi bi-plus-square mx-2"></i>New Product
                </button>
              </div>

              <ProductTable />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

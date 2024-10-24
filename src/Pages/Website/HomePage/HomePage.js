import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./homePage.module.css";
import {
  faBell,
  faCircleUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className={`${styles.home}`}>
        <nav className={`${styles["home-nav"]}`}>
          <div
            className={`${styles["nav-container"]} d-flex align-items-center justify-content-between gap-5`}>
            <h1 className={`${styles.logo} fw-bold`}>
              <span
                className="fw-bold"
                style={{ color: "#7939FF", fontSize: "16px" }}>
                Talents
              </span>
              Space
            </h1>

            <div className={`${styles["search-bar"]}`}>
              <input
                className={`${styles["search-input"]}`}
                type="search"
                placeholder="Search..."
              />
              <FontAwesomeIcon
                className={`${styles.icon}`}
                icon={faMagnifyingGlass}
              />
            </div>

            <div
              className={`${styles["nav-links"]} d-flex align-items-center justify-content-center gap-5`}>
              <ul
                className={`d-flex align-items-center justify-content-between gap-5`}>
                <li>Home</li>
                <li>Categories</li>
                <li>About</li>
              </ul>
              <div
                className={`${styles["nav-icons"]} d-flex align-items-center justify-content-center gap-5`}>
                <Link>
                  <FontAwesomeIcon icon={faBell} />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faCircleUser} />
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div
          className={`${styles.landing} d-flex align-items-center justify-content-center`}>
          <div
            className={`${styles["landing-container"]} d-flex align-items-center justify-content-evenly`}>
            <div className={styles["left-side"]}>
              <h1 style={{ fontWeight: "bold", fontSize: "48px" }}>
                Welcome to Talent<span style={{ color: "#7939FF" }}>Space</span>
                - Where Opportunities and Growth Meet
              </h1>
              <p style={{ fontSize: "18px", color: "#717171" }}>
                TalentSpace brings talents, mentors, and investors together,
                unlocking endless growth opportunities.
              </p>
            </div>

            {/* Image */}
            <div className={styles["right-side"]}>
              <img
                src={require("../../../Assets/Images/landing.png")}
                alt="login-img"
              />
            </div>
          </div>
        </div>
        <span className={`${styles.border}`}></span>
        <div className={`${styles.cards} row align-items-center justify-content-center text-center`} style={{ backgroundColor: "white" }}>
          <div className="col-6">loream</div>
          <div className="col-6">loream</div>
          <div className="col-6">loream</div>
          <div className="col-6">loream</div>
          <div className="col-6">loream</div>
          <div className="col-6">loream</div>
          <div className="col-6">loream</div>
          <div className="col-6">loream</div>
        </div>
      </div>
    </>
  );
}

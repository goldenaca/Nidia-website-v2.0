import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Nav() {
  const [scroll, setScroll] = React.useState(false);
  const [menuButton, setMenuButton] = React.useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) setScroll(false);
    else setScroll(true);
  });

  function menuButtonHandler() {
    if (!scroll) setScroll(!scroll);
    if (menuButton && window.scrollY === 0) setScroll(!scroll);
    setMenuButton(!menuButton);
  }

  return (
    <div className={scroll ? "nav on-scroll" : "nav"}>
      <Link to="/" className="logo" onClick={() => window.scrollTo(0, 0)}>
        <p>Cabañas Nidia </p>
      </Link>
      <i
        onClick={menuButtonHandler}
        className={
          menuButton ? "fas menu-button fa-times" : "fas menu-button fa-bars"
        }
      ></i>
      <ul className={menuButton ? "nav-links mobile" : "nav-links"}>
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
            setMenuButton(!menuButton);
            setScroll(!scroll);
          }}
          to="/rincon-del-soñador"
          className="link-text"
        >
          <li className="link">
            <p>Rincón del Soñador</p>
          </li>
        </Link>
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
            setMenuButton(!menuButton);
            setScroll(!scroll);
          }}
          to="/soñador-del-arrayan"
          className="link-text"
        >
          <li className="link">
            <p>Soñador de Arrayan</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;

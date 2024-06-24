import React, { useState } from "react";
import logo_Navbar from "../../src/assets/logoblack.gif";
import "../../src/styles/Navbar.css";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "es", lang: "Español" },
  { code: "en", lang: "English" },
];

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const { i18n } = useTranslation();
  const { t } = useTranslation(["navbar"]);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <div className="navbar-brand navbar-brand-left">
          <a className="nav-link" href="/">
            <img className="logo" alt="" src={logo_Navbar} />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/vida">
                {t("vida")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/obra">
                {t("obra")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/escritos">
                {t("escritos")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/fundacion">
                {t("fundacion")}
              </a>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={dropdownOpen ? "true" : "false"}
              >
                🌐
              </a>
              <div
                className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
                aria-labelledby="navbarDropdown"
              >
                {languages.map((lang) => (
                  <a
                    key={lang.code}
                    className="dropdown-item"
                    onClick={() => changeLanguage(lang.code)}
                  >
                    {lang.lang}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

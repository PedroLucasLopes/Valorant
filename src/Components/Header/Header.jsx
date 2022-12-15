import React from "react";
import valorant from "../../assets/valorant-logo.png";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <header className="header container">
      <Link to='/'>
        <img src={valorant} alt="Logotipo Valorant" className="logo" />
      </Link>
      <ul className="header-list">
        <li className="option">
          <Link to="/agents">Agentes</Link>
        </li>
        <li className="option">
          <Link to="/maps">Mapas</Link>
        </li>
        <li className="option">
          <Link href="/valorant">Valorant</Link>
        </li>
      </ul>
    </header>
  );
};

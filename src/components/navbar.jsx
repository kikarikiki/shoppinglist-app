import React from 'react';
import '../styles/Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// Stateless Functional Component
const NavBar = ({ totalProducts, totalCart })  => {
  return (
      <nav id="ftco-navbar" className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light mb-4">
        <div className="container p-0">
        <a class="navbar-brand" href="index.html">Planty</a>
        <button class="navbar-toggler btn btn-nav" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} />
        </button>
          <div id="ftco-navbar" className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item ms-2">
                  <i><FontAwesomeIcon icon={faCartShopping} /></i>
                  <span>
                  {totalProducts}
                  </span>
                </li>
                <li className="nav-item ms-2"> | </li>
                <li className="nav-item ms-2">€ {totalCart}</li>
              </ul>
          </div>
        </div>
      </nav>
  );
};
export default NavBar;

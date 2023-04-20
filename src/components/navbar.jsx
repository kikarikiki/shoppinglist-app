import React from 'react';

// Stateless Functional Component
const NavBar = ({ totalCounters })  => {
  return (
    <nav className="navbar navbar-light bg-light mb-4">
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand" href="#">
          ShoppingCart-App{" "}
        </a>
        <div>
          <span>Cart</span>
          <span className="badge badge-pill bg-secondary ms-2">
              {totalCounters}
          </span>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;

import React from 'react';

// Stateless Functional Component
const NavBar = ({ totalCounters })  => {
  return (
    <nav className="navbar navbar-light bg-light mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill bg-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-(--color-primary) text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">ASD Piemonte Calcio</div>
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="hover:text-(--color-primary-light)">
              Home
            </Link>
          </li>
          <li>
            <Link to="/teams" className="hover:text-(--color-primary-light)">
              Squadre
            </Link>
          </li>
          <li>
            <Link to="/matches" className="hover:text-(--color-primary-light)">
              Partite
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-(--color-primary-light)">
              Contatti
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

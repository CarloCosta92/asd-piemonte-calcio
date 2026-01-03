import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "Squadre", to: "/teams" },
    { name: "Partite", to: "/matches" },
    { name: "Info", to: "/information" },
  ];

  return (
    <div>
      <div className="bg-(--color-primary-light) text-white px-6 py-1 ">
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="mailto:info@asdpiemontecalcio.it"
            className="hover:underline"
          >
            info@asdpiemontecalcio.it
          </a>
          <a href="tel:0123456789" className="hover:underline">
            0123 456789
          </a>
        </div>
      </div>

      <nav className="bg-(--color-primary) text-white px-6 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">ASD Piemonte Calcio</div>

          {/* Menu desktop */}
          <ul className="hidden md:flex gap-6">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-(--color-highlight) font-semibold"
                      : "hover:text-(--color-primary-light)"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Hamburger mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-4 mt-4 px-6 pb-4">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-(--color-highlight) font-semibold"
                      : "hover:text-(--color-primary-light)"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

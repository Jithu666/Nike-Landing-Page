import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center flex-row">
      <header className="">
        <Link to="https://www.nike.com/in/">
          <img
            src={logo}
            alt=""
            className="ml-14 mt-2 w-16 h-12 cursor-pointer"
          />
        </Link>
      </header>
      <nav>
        <ul className="flex flex-row ml-96 space-x-6 font-bold cursor-pointer">
          <Link to="/">
            <li>MENU</li>
          </Link>
          <Link to="/">
            <li>LOCATION</li>
          </Link>
          <Link to="/">
            <li>ABOUT</li>
          </Link>
          <Link to="/">
            <li>CONTACT</li>
          </Link>
        </ul>
      </nav>
      <button className="bg-red-700 px-3 py-0.5 ml-80 cursor-pointer font-medium text-white">
        Login
      </button>
    </div>
  );
};

export default Header;

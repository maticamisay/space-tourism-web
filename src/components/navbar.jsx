import React from "react";
import { Link } from "react-router-dom";

const navbar = ({ currentRoute }) => {
  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/destination"}>Destination</Link>
        </li>
        <li>
          <Link to={"/crew"}>Crew</Link>
        </li>
        <li>
          <Link to={"/technology"}>Technology</Link>
        </li>
      </ul>
    </header>
  );
};

export default navbar;

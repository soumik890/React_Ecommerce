import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">
        All Rights Reserved &copy;
        <span className="fs-6">Soumik Chakraborty</span>
      </h4>

      <p className="text-center mt-3">
        <Link to="/">Home</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>|<Link to="/about">About</Link>
      </p>
    </div>
  );
};

export default Footer;

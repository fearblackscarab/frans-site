import React from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="dropdown show top-nav-item col-4">
      <Link className="dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Shop
      </Link>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <Link to='/bracelets' className="dropdown-item">Bracelets</Link>
        <Link to='/necklaces' className="dropdown-item">Necklaces</Link>
        <Link to='/earrings' className="dropdown-item">Earrings</Link>
      </div>
    </div>
  )
};

export default Dropdown;
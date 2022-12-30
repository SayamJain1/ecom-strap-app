import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.scss";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";

function Navbar() {
  const products = useSelector((state) => state.cart.products);

  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img
              src="/img/in.png"
              style={{ width: "30px", height: "20px" }}
              alt=""
            />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>INR</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <NavLink className="link" to="/products/1">
              Women
            </NavLink>
          </div>
          <div className="item">
            <NavLink className="link" to="/products/2">
              Men
            </NavLink>
          </div>
          <div className="item">
            <NavLink className="link" to="/products/3">
              Children
            </NavLink>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            jordans
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart setOpen={setOpen} />}
    </div>
  );
}

export default Navbar;

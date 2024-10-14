import React, { useContext, useEffect, useState } from "react";
//sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
//cart context
import { CartContext } from "../contexts/CartContext";
//import icons
import { BsBag } from "react-icons/bs";
import cartIcon from "../img/shopping-bag.png";
//import link
import { Link } from "react-router-dom";
//import logo
import Logo from "../img/logo.svg";
import "./Header/Header.css";

const Header = () => {
  //header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  //event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* logo */}
        <Link to={"/"}>
          <div className="flex flex-row">
            <h1 className="pr-2 pt-1 text-lg text-gray-800">KAMPUSKLOSET</h1>
            <img className="w-[40px]" src={Logo} alt="" />
          </div>
        </Link>
        {/* login & cart */}
        <div className="flex flex-column">
          <div className="flex flex-column items-center mr-10 ">
            {localStorage.getItem("auth-token") ? (
              <button
                className="hover:text-gray-500 pt-1 pb-1 pr-4 pl-4 
                border-current border-2 text-xl text-gray-800"
                onClick={() => {
                  localStorage.removeItem("auth-token");
                  window.location.replace("/");
                }}
              >
                Logout
              </button>
            ) : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <button
                  className="hover:text-gray-500 hover:translate-5 pt-1 pb-1 pr-4 pl-4 
                border-current border-2 text-xl text-gray-800"
                >
                  Login
                </button>
              </Link>
            )}
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-2x1 w-[35px] h-[35px] hover:text-gray-500 active:" />
            {/* <img className="w-[40px] h-[40px] active:" src={cartIcon} alt="" /> */}
            <div
              className="bg-red-500 absolute -right-1 -bottom-1 text-[12px] w-[18px] h-[18px] 
        text-white rounded-full flex justify-center items-center"
            >
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

{
  /* <img className="w-[40px] h-[40px] active:" src={cartIcon} alt="" />
            <div
              className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] 
        text-white rounded-full flex justify-center items-center"
            ></div> */
}

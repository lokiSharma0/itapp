"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DiPostgresql } from "react-icons/di";
import { FiMenu, FiX } from "react-icons/fi";
import MobileView from "./hamburgerMenu";

const NavBar = () => {
  //for mobile view
  const [isOpen, setisOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  //for login auth
  const isuserloggedin = false;
  const menuRef = useRef(null);

  //nav when user is not logged in
  const NavContent_noUserLogin = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Login", href: "/login" },
  ];

  //nav when user is logged in
  const NavContent_userLogin = [
    { label: "Home", href: "/" },
    { label: "Profile", href: "/profile" },
    { label: "My Profile", href: "/profile" },
    { label: "My name", href: "/profile" },
  ];

  //highlight the current nav-bar
  const currentPath = usePathname();

  //changing hamburger toggle
  const toggleMenu = () => {
    if (isOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setisOpen(false);
        setIsAnimating(false);
      }, 300); // Duration matches the slide-out animation
    } else {
      setIsAnimating(true);
      setisOpen(true);
    }
  };
  const handleLinkClick = () => {
    setisOpen(false);
  };
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setisOpen(false);
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-white z-50 shadow-lg ">
      {/* Desktop View */}
      <div className="flex space-x-20">
        <div>
          <Link href="/">
            <DiPostgresql
              size={80}
              color={"White"}
              className="max-w-screen-lg bg-blue-600 rounded-xl mt-1 mb-1 mx-3 hover:bg-green-300"
            />
          </Link>
        </div>
        <div className="flex font-medium  mt-5 mb-1 text-lg">
          <ul className="items-center space-x-5 hidden md:flex ">
            {isuserloggedin ? (
              <>
                {NavContent_userLogin.map((link) => {
                  return (
                    <li key={link.href}>
                      <Link
                        className={`${
                          link.href === currentPath
                            ? "text-zinc-900"
                            : "text-zinc-400"
                        } hover:text-zinc-900 transition-colors`}
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </>
            ) : (
              <>
                {NavContent_noUserLogin.map((link) => {
                  return (
                    <li key={link.href}>
                      <Link
                        className={`${
                          link.href === currentPath
                            ? "text-zinc-900"
                            : "text-zinc-400"
                        } hover:text-zinc-900 transition-colors`}
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="orange_gradient text-center  w-44 md:hidden">
        <h2 className="text-lg">Welcome to YouWill</h2>
      </div>
      {/* Mobile View */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className=" focus:outline-none">
          {isOpen ? (
            <FiX size={30} className="text-white" />
          ) : (
            <FiMenu size={30} color="black" />
          )}
        </button>
      </div>

      {/* Sliding Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 transform ${
          isOpen ? "slide-in" : isAnimating ? "slide-out" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-20`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white">
            <FiX size={30} />
          </button>
        </div>
        <MobileView
          UserisLoggedIn={isuserloggedin}
          MobileNav_Content_nouserLoggedIn={NavContent_noUserLogin}
          MobileNav_Content_userLoggedIn={NavContent_userLogin}
          CloseNavwhenclicked_menuItem={handleLinkClick}
        />
      </div>
    </nav>
  );
};

export default NavBar;

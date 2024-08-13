"use client";
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import useOnScreen from "./useOnScreen";

const Footer = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const Footer_content = [
    { lable: "Home", href: "/" },
    { lable: "About Us", href: "/about" },
    { lable: "Login", href: "/login" },
    { lable: "Contact", href: "/contact" },
  ];
  return (
    <footer
      ref={ref}
      className={`bg-gray-800 text-white py-6 mt-7 ${
        isVisible ? "animate-footer" : "footer-hidden"
      } rounded-md`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-lg font-semibold mb-4 ">Quick Links</h2>
            <ul>
              {Footer_content.map((link) => {
                return (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-gray-400">
                      {link.lable}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p>211 Norton Street Ashfield, Australia </p>
            <p>Email: Youwill.services@gmail.com</p>
            <p>Phone: +1 426 763 400</p>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4 ">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF
                  size={20}
                  className="text-blue-600  bg-white rounded-md hover:text-blue-800  "
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter
                  size={20}
                  className="text-blue-500 rounded-lg hover:text-zinc-700 "
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaInstagram size={20} className="text-pink-600" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedinIn size={20} className="text-blue-700" />
              </a>
            </div>
          </div>
        </div>
        <div className="border"></div>
        <div className="text-center mt-6">
          <p>&copy; {new Date().getFullYear()} YouWill. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

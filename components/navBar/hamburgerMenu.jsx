import React from "react";
import Link from "next/link";

const MobileView = ({
  UserisLoggedIn,
  MobileNav_Content_nouserLoggedIn,
  MobileNav_Content_userLoggedIn,
  CloseNavwhenclicked_menuItem,
}) => {
  return (
    <div className="bg-gray-800 p-4 space-y-4">
      {UserisLoggedIn ? (
        <>
          {MobileNav_Content_userLoggedIn.map((link) => {
            return (
              <div key={link.href} className=" flex mr-5 space-x-7">
                <Link
                  href={link.href}
                  className="block text-gray-400 mt-4 md:mt-0 md:ml-4 hover:text-red-600"
                  onClick={CloseNavwhenclicked_menuItem}
                >
                  {link.label}
                </Link>
              </div>
            );
          })}
        </>
      ) : (
        <>
          {MobileNav_Content_nouserLoggedIn.map((link) => {
            return (
              <div key={link.href} className="flex mr-5 space-x-7">
                <Link
                  href={link.href}
                  className="block text-white mt-4 md:mt-0 md:ml-4 hover:text-red-600"
                  onClick={CloseNavwhenclicked_menuItem}
                >
                  {link.label}
                </Link>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default MobileView;

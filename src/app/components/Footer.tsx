import React from "react";

const link = [];

const Footer = () => {
  return (
    <>
      <div className="static bg-sky-900 h-16 w-full">
        <div className="absolute bottom-0 right-0 w-fit h-16 flex items-center">
          <span className="inline-block align-middle">
            <a className="px-3 border-r-2 border-white hover:underline">
              CONTACT US
            </a>
          </span>
          <span className="inline-block align-middle hover:underline">
            <a className="px-3">BACK TO TOP</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;

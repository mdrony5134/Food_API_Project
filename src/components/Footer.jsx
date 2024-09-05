import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-4 px-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
            <p className="text-xs text-gray-400 md:text-sm">
              Copyright 2024~ &copy; All Rights Reserved
            </p>
          </div>
          <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
           
           <p className="text-xs text-gray-400 md:text-sm">Developed By <span className="text-emerald-500 font-bold text-base">Md Rony</span> </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

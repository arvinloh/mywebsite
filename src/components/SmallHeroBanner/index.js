import React from "react";

const SmallHeroBanner = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-r from-light-cyan-500 to-space-cadet">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:flex lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {title}
          </h2>
          <p className="mt-5 text-xl text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallHeroBanner;
import React from 'react';

const Header = () => {
  return (
    <>
      <div className="text-white flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="heading flex flex-col mb-5 md:mb-0">
          <h2 className="font-extrabold text-xl">Social Media Dashboard</h2>
          <p className="font-bold text-xs text-desaturated-blue">
            Total followers 23,004
          </p>
        </div>
        <hr className="line md:hidden flex mb-5" />
        <div className="toggler flex justify-between items-center md:justify-around md:gap-5">
          <p className="font-bold text-sm text-desaturated-blue">Dark Mode</p>
          <input type="checkbox" name="switch" id="switch" />
          <label className="label" htmlFor="switch"></label>
        </div>
      </div>
    </>
  );
};

export default Header;

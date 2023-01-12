import React from 'react';
import Face from './assets/icon-facebook.svg';
import Insta from './assets/icon-instagram.svg';
import Twitt from './assets/icon-twitter.svg';
import You from './assets/icon-youtube.svg';
import Up from './assets/icon-up.svg';
import Down from './assets/icon-down.svg';

const Followers = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center mt-10 gap-5">
        <div className="facebook  bg-dark-des-blue w-full flex flex-col items-center pl-10 pr-10 pt-5 pb-5 gap-5 rounded-lg  ">
          <div className="flex gap-3 items-center">
            <img src={Face} alt="" />
            <p className="text-desaturated-blue text-sm">@nathanf</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-white text-4xl font-extrabold">1987</h1>
            <p className="text-desaturated-blue tracking-widest text-xs ">
              followers
            </p>
          </div>
          <p className="flex items-center gap-2 text-lime-green text-xs font-bold">
            <img src={Up} alt="" />
            12 Today
          </p>
        </div>

        <div className="twitter bg-dark-des-blue w-full flex flex-col items-center pl-10 pr-10 pt-5 pb-5 gap-5 rounded-lg  ">
          <div className="flex gap-3 items-center">
            <img src={Twitt} alt="" />
            <p className="text-desaturated-blue text-sm">@nathanf</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-white text-4xl font-extrabold">1044</h1>
            <p className="text-desaturated-blue tracking-widest text-xs ">
              followers
            </p>
          </div>
          <p className="flex items-center gap-2 text-lime-green text-xs font-bold">
            <img src={Up} alt="" />
            99 Today
          </p>
        </div>

        <div className="insta bg-dark-des-blue w-full flex flex-col items-center pl-10 pr-10 pt-5 pb-5 gap-5 rounded-lg  ">
          <div className="flex gap-3 items-center">
            <img src={Insta} alt="" />
            <p className="text-desaturated-blue text-sm">@nathanf</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-white text-4xl font-extrabold">11k</h1>
            <p className="text-desaturated-blue tracking-widest text-xs ">
              followers
            </p>
          </div>
          <p className="flex items-center gap-2 text-lime-green text-xs font-bold">
            <img src={Up} alt="" />
            1099 Today
          </p>
        </div>

        <div className="yt bg-dark-des-blue w-full flex flex-col items-center pl-10 pr-10 pt-5 pb-5 gap-5 rounded-lg  ">
          <div className="flex gap-3 items-center">
            <img src={You} alt="" />
            <p className="text-desaturated-blue text-sm">@nathanf</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-white text-4xl font-extrabold">8239</h1>
            <p className="text-desaturated-blue tracking-widest text-xs ">
              followers
            </p>
          </div>
          <p className="flex items-center gap-2 text-lime-green text-xs font-bold">
            <img src={Down} alt="" />
            144 Today
          </p>
        </div>
      </div>
    </>
  );
};

export default Followers;

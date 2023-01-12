import React from 'react';
import Face from './assets/icon-facebook.svg';
import Insta from './assets/icon-instagram.svg';
import Twitt from './assets/icon-twitter.svg';
import You from './assets/icon-youtube.svg';
import Up from './assets/icon-up.svg';
import Down from './assets/icon-down.svg';

const Overview = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <h2 className="font-extrabold text-white text-xl">Overview-Today</h2>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="bg-dark-des-blue w-full flex flex-col p-5 gap-5 rounded-lg">
              <div className="flex flex-row justify-between w-full items-center">
                <p className="font-bold text-xs text-desaturated-blue">
                  Page Views
                </p>
                <img src={Face} alt="" />
              </div>
              <div className="flex w-full justify-between">
                <h2 className="text-2xl font-extrabold text-white">87</h2>
                <p className="flex items-center gap-1 font-bold text-sm text-lime-green">
                  <img src={Up} alt="" />
                  3%
                </p>
              </div>
            </div>
            <div className="bg-dark-des-blue w-full flex flex-col p-5 gap-5 rounded-lg">
              <div className="flex flex-row justify-between w-full items-center">
                <p className="font-bold text-xs text-desaturated-blue">Likes</p>
                <img src={Face} alt="" />
              </div>
              <div className="flex w-full justify-between">
                <h2 className="text-2xl font-extrabold text-white">52</h2>
                <p className="flex items-center gap-1 font-bold text-sm text-bright-red">
                  <img src={Down} alt="" />
                  2%
                </p>
              </div>
            </div>
            <div className="bg-dark-des-blue w-full flex flex-col p-5 gap-5 rounded-lg">
              <div className="flex flex-row justify-between w-full items-center">
                <p className="font-bold text-xs text-desaturated-blue">Likes</p>
                <img src={Insta} alt="" />
              </div>
              <div className="flex w-full justify-between">
                <h2 className="text-2xl font-extrabold text-white">5462</h2>
                <p className="flex items-center gap-1 font-bold text-sm text-lime-green">
                  <img src={Up} alt="" />
                  2257%
                </p>
              </div>
            </div>
            <div className="bg-dark-des-blue w-full flex flex-col p-5 gap-5 rounded-lg">
              <div className="flex flex-row justify-between w-full items-center">
                <p className="font-bold text-xs text-desaturated-blue">
                  Profile Views
                </p>
                <img src={Face} alt="" />
              </div>
              <div className="flex w-full justify-between">
                <h2 className="text-2xl font-extrabold text-white">52k</h2>
                <p className="flex items-center gap-1 font-bold text-sm text-lime-green">
                  <img src={Up} alt="" />
                  1375%
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="bg-dark-des-blue w-full flex flex-col p-5 gap-5 rounded-lg">
              <div className="flex flex-row justify-between w-full items-center">
                <p className="font-bold text-xs text-desaturated-blue">
                  Retweets
                </p>
                <img src={Twitt} alt="" />
              </div>
              <div className="flex w-full justify-between">
                <h2 className="text-2xl font-extrabold text-white">117</h2>
                <p className="flex items-center gap-1 font-bold text-sm text-lime-green">
                  <img src={Up} alt="" />
                  303%
                </p>
              </div>
            </div>
            <div className="bg-dark-des-blue w-full flex flex-col p-5 gap-5 rounded-lg">
              <div className="flex flex-row justify-between w-full items-center">
                <p className="font-bold text-xs text-desaturated-blue">Likes</p>
                <img src={Twitt} alt="" />
              </div>
              <div className="flex w-full justify-between">
                <h2 className="text-2xl font-extrabold text-white">507</h2>
                <p className="flex items-center gap-1 font-bold text-sm text-lime-green">
                  <img src={Up} alt="" />
                  553%
                </p>
              </div>
            </div>
            <div className="bg-dark-des-blue w-full flex flex-col p-5 gap-5 rounded-lg">
              <div className="flex flex-row justify-between w-full items-center">
                <p className="font-bold text-xs text-desaturated-blue">Likes</p>
                <img src={You} alt="" />
              </div>
              <div className="flex w-full justify-between">
                <h2 className="text-2xl font-extrabold text-white">107</h2>
                <p className="flex items-center gap-1 font-bold text-sm text-bright-red">
                  <img src={Down} alt="" />
                  19%
                </p>
              </div>
            </div>
            <div className="bg-dark-des-blue w-full flex flex-col p-5 gap-5">
              <div className="flex flex-row justify-between w-full items-center rounded-lg">
                <p className="font-bold text-xs text-desaturated-blue">
                  Total Views
                </p>
                <img src={You} alt="" />
              </div>
              <div className="flex w-full justify-between">
                <h2 className="text-2xl font-extrabold text-white">1407</h2>
                <p className="flex items-center gap-1 font-bold text-sm text-bright-red">
                  <img src={Down} alt="" />
                  12%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;

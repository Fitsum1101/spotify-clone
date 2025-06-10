import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import TopChart from "./TopChart";
import TopArtist from "./TopArtist";

const RootLayout = () => {
  return (
    <div className="flex w-full ">
      <div className="bg-[#191624] basis-56 h-screen">
        <Navbar />
      </div>
      <div className="bg-[#161552]  grow-2">
        <Outlet />
      </div>
      <div className="bg-[#161552] grow ">
        <TopChart />
        <TopArtist />
      </div>
    </div>
  );
};

export default RootLayout;

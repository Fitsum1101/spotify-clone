import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import TopChart from "./TopChart";
import TopArtist from "./TopArtist";

const RootLayout = () => {
  return (
    <div className="flex w-full h-screen fixed">
      <div className="">
        <Navbar />
      </div>
      <div className="bg-[#161552] px-6   overflow-y-scroll hide-scrollbar flex xl:flex-row h-full flex-col-reverse ">
        <Outlet />
      </div>
      {/* h-[calc(100vh-72px)] */}
      <div className="bg-[#161552] xl:sticky relative top-0 h-screen flex flex-col ">
        <TopChart />
        <TopArtist />
      </div>
    </div>
  );
};

export default RootLayout;

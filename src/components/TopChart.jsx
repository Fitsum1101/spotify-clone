import { Link } from "react-router-dom";
import ChartSongs from "./ChartSongs";

const TopChart = () => {
  return (
    <div className="mt-13 md:w-[18rem] pr-5">
      <div className="flex justify-between items-center">
        <h3 className="text-white text-xl capitalize font-bold">Top charts</h3>
        <Link className="text-gray-300" to={"/top-artists"}>
          see more
        </Link>
      </div>
      <div className="flex flex-col gap-4 mt-5">
        <ChartSongs />
        <ChartSongs />
        <ChartSongs />
        <ChartSongs />
        <ChartSongs />
      </div>
    </div>
  );
};

export default TopChart;

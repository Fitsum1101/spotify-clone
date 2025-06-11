import { FaPlayCircle } from "react-icons/fa";
import { image } from "../assets";

const ChartSongs = () => {
  return (
    <div className="w-full flex justify-between text-white">
      <div className="flex gap-1">
        <p>1.</p>
        <img className="w-20 h-15" src={image} alt="photo" />
        <div className="flex flex-col capitalize">
          <p className="truncate text-white text-xl font-bold">calm down</p>
          <p className="truncate text-gray-300 pt-1">rema</p>
        </div>
      </div>
      <div className="text-2xl self-center">
        <FaPlayCircle />
      </div>
    </div>
  );
};

export default ChartSongs;

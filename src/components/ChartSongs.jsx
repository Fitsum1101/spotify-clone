import { FaPlayCircle } from "react-icons/fa";

const ChartSongs = ({ i, image, title, artist }) => {
  return (
    <div className="w-full flex justify-between text-white">
      <div className="flex gap-1">
        <p>{i}.</p>
        <img className="w-20 h-15" src={image} alt="photo" />
        <div className="flex flex-col capitalize">
          <p className="truncate text-white text-xl font-bold">{title}</p>
          <p className="truncate text-gray-300 pt-1">{artist}</p>
        </div>
      </div>
      <div className="text-2xl self-center">
        <FaPlayCircle />
      </div>
    </div>
  );
};

export default ChartSongs;

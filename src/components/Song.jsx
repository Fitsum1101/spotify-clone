import { Link } from "react-router-dom";
import { image } from "../assets";
import { use, useState } from "react";
import { MdOutlineMusicNote } from "react-icons/md";
import MusicPlayingContext from "../context/MusicPlayingContext";

const Song = ({ id, songImage, title, artist }) => {
  const [playingHover, ssetPlayingHover] = useState(false);

  const { playingSongId, setPlayingSongId } = use(MusicPlayingContext);
  console.log(playingSongId);
  return (
    <Link
      to={"/"}
      onMouseOver={() => ssetPlayingHover(true)}
      onMouseOut={() => ssetPlayingHover(false)}
      onClick={() => setPlayingSongId(id)}
      className="bg-[#3a398b] relative  rounded w-[9rem]"
    >
      <div className="p-3 flex justify-center flex-col">
        <img className="w-full h-30 rounded" src={songImage} alt="songImage" />
        <p className="font-semibold text-lg text-white truncate">{title}</p>
        <p className="text-sm truncate text-gray-300 mt-1">{artist}</p>
        {playingSongId && playingSongId === id && (
          <p className="absolute top-0 flex items-center justify-center left-0 text-white w-full h-full z-20">
            <MdOutlineMusicNote className="text-6xl" />
          </p>
        )}
        {playingSongId !== id && playingHover && (
          <p className="absolute top-0 flex items-center justify-center left-0 text-white w-full h-full z-20">
            <MdOutlineMusicNote className="text-6xl" />
          </p>
        )}
      </div>
    </Link>
  );
};
//
export default Song;

import { image } from "../assets";

const Song = () => {
  return (
    <div className="bg-[#3a398b] rounded w-[9rem]">
      <div className="p-3 flex justify-center flex-col">
        <img className="w-full h-30 rounded" src={image} alt="songImage" />
        <p className="font-semibold text-lg text-white truncate">calum down</p>
        <p className="text-sm truncate text-gray-300 mt-1">rema</p>
      </div>
    </div>
  );
};
// { songImage, title, artist }
export default Song;

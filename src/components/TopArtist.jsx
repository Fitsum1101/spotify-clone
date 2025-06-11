import { Link } from "react-router-dom";

const TopArtist = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-5 mx-2">
        <h3 className="text-white text-xl capitalize font-bold">Top Artists</h3>
        <Link className="text-gray-300" to={"/top-artists"}>
          see more
        </Link>
      </div>
    </div>
  );
};

export default TopArtist;

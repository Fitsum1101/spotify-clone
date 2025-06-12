import { Link, useRouteLoaderData } from "react-router-dom";
import ChartSongs from "./ChartSongs";
import { use, useEffect } from "react";
import MusicPlayingContext from "../context/MusicPlayingContext";

const TopChart = () => {
  const data = useRouteLoaderData("layouData")
    ? useRouteLoaderData("layouData")
    : [];
  const { handleSongs, allSongs } = use(MusicPlayingContext);
  console.log(allSongs);
  useEffect(() => {
    console.log("hi middle");
    handleSongs(data);
  }, [handleSongs]);
  return (
    <div className="mt-13 md:w-[20rem] pr-5">
      <div className="flex justify-between items-center">
        <h3 className="text-white text-xl capitalize font-bold">Top charts</h3>
        <Link className="text-gray-300" to={"/top-artists"}>
          see more
        </Link>
      </div>
      <div className="flex flex-col gap-6 mt-5">
        {allSongs.length > 5 &&
          allSongs.slice(0, 5).map((songs, i) => {
            return (
              <ChartSongs
                i={i + 1}
                artist={songs.attributes.artistName}
                title={songs.attributes.name}
                image={songs.attributes.artwork.url}
                key={i}
                id={songs.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TopChart;

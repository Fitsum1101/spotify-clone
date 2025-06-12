import { useState } from "react";
import { genres } from "../assets/constants";
import Song from "../components/Song";
import { useRouteLoaderData } from "react-router-dom";

const Discover = () => {
  const data = useRouteLoaderData("layouData")
    ? useRouteLoaderData("layouData")
    : [];
  const [genere, setGenere] = useState("POP");
  return (
    <div className="mt-15 px-5">
      <div className="flex justify-between text-white">
        <h1 className="text-3xl font-bold">Discover</h1>
        <select
          defaultValue={"pop"}
          onChange={(e) => setGenere(e.target.value)}
          className="bg-[#191624] outline-none border-none"
        >
          {genres.map((genere) => (
            <option key={genere.title} value={genere.value}>
              {genere.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap gap-5 mt-10">
        {data.map((songs, i) => {
          return (
            <Song
              artist={songs.attributes.artistName}
              title={songs.attributes.name}
              songImage={songs.attributes.artwork.url}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Discover;

// export const loader = async () => {};

export const loader = async () => {
  const response = await fetch(
    "https://shazam-core.p.rapidapi.com/v1/charts/genre-world?genre_code=POP&country_code=DZ",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
        "x-rapidapi-host": "shazam-core.p.rapidapi.com",
      },
    }
  );
  if (!response.ok || response.status !== 200) {
    throw new Error("something went wrong please try again later");
  }

  const data = await response.json();

  console.log(data);

  return data.slice(0, 20);
};

// {data.map((songs, i) => {
//           return (
//             <Song
//               artist={songs.attributes.artistName}
//               title={songs.attributes.name}
//               songImage={songs.attributes.artwork.url}
//               key={i}
//             />
//           );
// })}

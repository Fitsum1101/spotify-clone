import loader from "./loader.svg";
import logo from "./logo.svg";
import image from "./image.png";
const options = {
  method: "GET",
  hostname: "shazam-core.p.rapidapi.com",
  port: null,
  path: "/v1/charts/genre-world?genre_code=POP&country_code=DZ",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_BASE_URL,
    "x-rapidapi-host": "shazam-core.p.rapidapi.com",
  },
};

export { logo, loader, image, options };

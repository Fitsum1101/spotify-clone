import { createContext } from "react";

const MusicPlayingContext = createContext({
  playingSongId: null,
  allSongs: [],
  handleSongs: () => {},
  setPlayingSongId: () => {},
});

export default MusicPlayingContext;

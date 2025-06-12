import { useState } from "react";
import MusicPlayingContext from "./MusicPlayingContext";

const MusicPlayingProvider = ({ children }) => {
  const [allSongs, setAllSongs] = useState([]);
  const [playingSongId, setPlayingSongId] = useState(null);

  const handleSongs = (songs) => setAllSongs(songs);
 

  return (
    <MusicPlayingContext
      value={{ allSongs, handleSongs, playingSongId, setPlayingSongId }}
    >
      {children}
    </MusicPlayingContext>
  );
};

export default MusicPlayingProvider;

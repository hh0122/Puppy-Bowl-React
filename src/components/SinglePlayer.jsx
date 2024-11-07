import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FetchPlayers from "../API";

const SinglePlayer = () => {
  const { id } = useParams();
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const getPlayers = async() => {
      const allPlayers = await FetchPlayers();
      setPlayers(allPlayers);
    }
    getPlayers();
  }, []);

  useEffect(() => {
    if (players.length > 0) {
      const selectedPlayer = players.find((player) => player.id === Number(id));
      setPlayer(selectedPlayer);
    }
  }, [players, id]);

  return (
    <div>
      {player ? (
        <>
          <h2>{player.name}</h2>
          <img src={player.imageUrl} alt={player.name} width="150" />
          <p>Breed: {player.breed}</p>
          <p>Status: {player.status}</p>
          <p>Owner: {player.owner}</p>
          <button>Delete Player</button>
        </>
      ) : (
        <div>Player not found</div>
      )}
    </div>
  );
}

export default SinglePlayer;
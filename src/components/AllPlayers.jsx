import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchPlayers from "../API";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const fetchPlayers = await FetchPlayers();
      setPlayers(fetchPlayers)

    }
    getPlayers()
  }, []);

  return (
    <>
      <h2>All Players</h2>
      {players.map((player) => (
          <div key={player.id}>
          <img src={player.imageUrl} alt={player.name} width="150" />
          <h4>{player.name}</h4>
          <p>Breed: {player.breed}</p>
          <p>Status: {player.status}</p>
          <Link to={`/players/${player.id}`}>See Details</Link>
        </div>
      ))}
    </>
  )
}

export default AllPlayers;
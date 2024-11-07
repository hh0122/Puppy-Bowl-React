import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NavBar from "./components/Home";
import CreatePlayerForm from "./components/NewPlayersForm";

const App = () => {

  return (
    <>
      <NavBar />
      <h1>Puppy Bowl</h1>
      <Routes> 
        <Route path="/" element={<AllPlayers/>} />
        <Route path="/players/:id" element={<SinglePlayer />} />  
        <Route path="/new-player" element={<CreatePlayerForm />} />
      </Routes>
    </>
  );
}

export default App;
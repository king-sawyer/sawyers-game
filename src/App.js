import React from "react";
import RenderCharacters from "./renderCharacters";
import data from "./CharacterData";
import "./app.css";
export default function App() {
  return (
    <div className="App">
      <h1>Blood on the Clocktower</h1> <RenderCharacters data={data} />
    </div>
  );
}

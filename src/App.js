import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import LandingCreate from "./Components/LandingCreate/LandingCreate";
import NoteCard from "./Components/NoteCard/NoteCard";
import CreateNote from "./Components/CreateNote/CreateNote";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  return (
    <div className="App">
      <Navbar />
      <CreateNote onAdd={addNote} />

      {notes.map((noteItem, index) => {
        return (
          <NoteCard
            key={index}
            id={index}
            tittle={noteItem.tittle}
            content={noteItem.content}
          />
        );
      })}
    </div>
  );
}

export default App;

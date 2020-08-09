import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import LandingCreate from "./Components/LandingCreate/LandingCreate";
import NoteCard from "./Components/NoteCard/NoteCard";
import CreateNote from "./Components/CreateNote/CreateNote";
import { Row, Button, Col } from "antd";
import ButtonAdd from "./Components/ButtonAdd/ButtonAdd";

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

      <Row gutter={[32, 32]}>
        {notes.map((noteItem, index) => {
          return (
            <Col span={6}>
              <NoteCard
                key={index}
                id={index}
                header={noteItem.tittle}
                content={noteItem.content}
              />
            </Col>
          );
        })}
      </Row>
      <ButtonAdd />
    </div>
  );
}

export default App;

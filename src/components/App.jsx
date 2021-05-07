import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNoteArea from "./CreateNoteArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(deleteNoteId) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        // Return all notes where the index does not equal the id of note to be deleted
        return index !== deleteNoteId;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateNoteArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            onDelete={deleteNote}
            title={note.title}
            content={note.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

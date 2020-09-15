import React, { useState } from "react";

const AddNotes = ({ note, setNotes }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const clickHandler = () => {
    const newNote = {
      title: title,
      description: description,
      time: new Date().toLocaleTimeString(),
    };
    setNotes([...note, newNote]);
  };
  return (
    <div>
      <input
        placeholder="Title"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Description"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <br />
      <button onClick={clickHandler}>Add Note</button>
    </div>
  );
};

export default AddNotes;

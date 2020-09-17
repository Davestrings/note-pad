import React, { useState } from "react";
import "../../dist/css/register.css";

const AddNotes = ({ note, setNotes, handleClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const clickHandler = () => {
    if (title === "" || description === "") {
      alert("You cannot add an empty note");
    } else {
      const newNote = {
        title: title,
        description: description,
        time: new Date().toLocaleTimeString(),
      };
      setNotes([...note, newNote]);
      handleClose();
    }
  };

  return (
    <div>
      <div className="backdrop">
        <div onClick={handleClose} className="close">
          <img src={require("../../asset/close-24px.svg")} alt="icon" />
        </div>
        <div className="backdrop__content">
          <input
            placeholder="Title"
            className="backdrop__content-title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <textarea
            placeholder="Description"
            name="description"
            className="backdrop__content-description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <br />
          <button className="backdrop__content-btn" onClick={clickHandler}>
            Add Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNotes;

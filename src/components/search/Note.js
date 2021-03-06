import React from "react";
// import Searchbar from "./Searchbar";
import "../../dist/css/register.css";

const Note = ({ notes }) => {
  return (
    <div className="card-container">
      {notes.map((note, index) => {
        return (
          <div key={index} className="card">
            <div className="title-div">
              <h3 className="card__title">{note.title}</h3>
              <img src={require("../../asset/more_vert-24px.svg")} alt="icon" />
            </div>
            <p className="card__text">{note.description}</p>
            <div className="btn-div">
              <button className="card__btn" disabled>
                Created
              </button>
              <span>{note.time} </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Note;

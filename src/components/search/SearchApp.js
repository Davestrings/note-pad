import React, { useState } from "react";
import AddNotes from "./AddNotes";
import Note from "./Note";
import Searchbar from "./Searchbar";
import "../../dist/css/register.css";

const SearchApp = () => {
  const ourNotes = [
    {
      title: "My Daughter",
      description: `Lorem Ipsum is simply dummy 
                        text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since`,
      time: new Date(2013, 13, 1).toDateString(),
    },
    {
      title: "My son",
      description: `Lorem Ipsum is simply dummy 
                        text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since`,
      time: new Date(2013, 12, 1).toDateString(),
    },
  ];

  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState(ourNotes);
  const [show, setShow] = useState(false);
  // const [close, setClose] = useState(false);

  const filteredNotes = notes.filter((note) => {
    return note
      ? note.title.toLowerCase().includes(search.toLowerCase())
      : "No match found for your search";
  });
  // const openHandler = (e) => {
  //   setShow({ show: true });
  //   setClose({ close: false });

  // };
  console.log("show", show);

  const closeHandler = () => {
    setShow(false);
  };

  return (
    <div>
      <h1>SearchApp</h1>
      <div className="searchapp_body">
        <Searchbar search={search} setSearch={setSearch} />
        <Note notes={filteredNotes} />
        <div className="addNote">
          <span
            onClick={() => {
              setShow({ show: true });
            }}
          >
            <img src={require("../../asset/add_circle2.svg")} alt="icon" />
          </span>
        </div>
        {show ? (
          <AddNotes
            note={notes}
            handleClose={closeHandler}
            setNotes={setNotes}
          />
        ) : null}
      </div>
    </div>
  );
};

export default SearchApp;

import React, { useState } from "react";
import AddNotes from "./AddNotes";
import Note from "./Note";
import Searchbar from "./Searchbar";

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

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <h1>SearchApp</h1>
      <AddNotes note={notes} setNotes={setNotes} />
      <Searchbar search={search} setSearch={setSearch} />
      <Note notes={filteredNotes} />
    </div>
  );
};

export default SearchApp;

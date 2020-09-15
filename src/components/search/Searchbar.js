import React from "react";

const Searchbar = ({ search, setSearch }) => {
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input onChange={onChangeHandler} />
    </div>
  );
};

export default Searchbar;

import React from "react";

const Searchbar = ({ search, setSearch }) => {
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder="search"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Searchbar;

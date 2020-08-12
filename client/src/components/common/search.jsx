import React from "react";

export default (props) => {
  const { handleSearchClick, handleSearchInput } = props;
  return (
    <form onSubmit={handleSearchClick} className="search-form">
      <label htmlFor="search-input" className="search-label">
        <input
          type="text"
          name="search-input"
          id="search-input"
          placeholder="title..."
          onChange={handleSearchInput}
        />
      </label>
      <input type="submit" value="Search" />
    </form>
  );
};

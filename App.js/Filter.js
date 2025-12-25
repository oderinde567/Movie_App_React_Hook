import React from "react";

const Filter = ({ filterTitle, setFilterTitle, filterRating, setFilterRating }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search by title..."
        value={filterTitle}
        onChange={(e) => setFilterTitle(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        min="0"
        max="5"
        value={filterRating}
        onChange={(e) => setFilterRating(Number(e.target.value))}
      />
    </div>
  );
};

export default Filter;

import React from "react";
import DatePicker from "react-datepicker";

export default (props) => {
  const {
    handleSearchClick,
    handleSearchInput,
    handleStartDateChange,
    handleEndDateChange,
    startDate,
    endDate,
  } = props;
  return (
    <form
      onSubmit={handleSearchClick}
      className="search-form my-5 d-flex justify-content-between"
    >
      <label htmlFor="search-input" className="search-label">
        <input
          type="text"
          name="search-input"
          id="search-input"
          placeholder="title..."
          onChange={handleSearchInput}
        />
      </label>

      <label htmlFor="start-date" className="date-picker">
        <DatePicker
          placeholderText="start : mm/dd/yy"
          selected={startDate}
          onChange={handleStartDateChange}
        />
      </label>
      <label htmlFor="end-date" className="date-picker">
        <DatePicker
          placeholderText="end : mm/dd/yy"
          selected={endDate}
          onChange={handleEndDateChange}
        />
      </label>
      <input
        type="submit"
        value="Search"
        className="bg-primary text-white border-0 px-4"
      />
    </form>
  );
};

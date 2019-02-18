import React from 'react';
import './Filters.css';

const filters = ({
  onUpdateSearchParams,
  occurred_after,
  occurred_before,
  query
}) => {
  const searchFromElRef = React.createRef();
  const searchToElRef = React.createRef();
  const searchDescriptionElRef = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    const occurred_after = searchFromElRef.current.value
      ? +new Date(searchFromElRef.current.value) / 1000
      : '';
    const occurred_before = searchToElRef.current.value
      ? +new Date(searchToElRef.current.value) / 1000
      : '';
    const query = searchDescriptionElRef.current.value
      ? searchDescriptionElRef.current.value
      : '';
    onUpdateSearchParams({
      occurred_after,
      occurred_before,
      query
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="filters__list">
        <div className="filters__item font-light">
          <label htmlFor="search-description">Search case description</label>
          <input
            type="text"
            placeholder="Search case description"
            ref={searchDescriptionElRef}
            id="search-description"
            defaultValue={query}
          />
        </div>
        <div className="filters__item font-light">
          <label htmlFor="search-from">From</label>
          <input
            type="datetime-local"
            placeholder="From"
            ref={searchFromElRef}
            id="search-from"
            defaultValue={
              occurred_after
                ? new Date(occurred_after * 1000).toISOString().split('.')[0]
                : ''
            }
          />
        </div>
        <div className="filters__item font-light">
          <label htmlFor="search-to">To</label>
          <input
            type="datetime-local"
            placeholder="To"
            ref={searchToElRef}
            id="search-to"
            max={new Date(Date.now()).toISOString().split('.')[0]}
            defaultValue={
              occurred_before
                ? new Date(occurred_before * 1000).toISOString().split('.')[0]
                : ''
            }
          />
        </div>
        <div className="filters__item">
          <input type="submit" value="Find Cases" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default filters;

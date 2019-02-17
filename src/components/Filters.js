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
        <input
          type="text"
          placeholder="Search case description"
          ref={searchDescriptionElRef}
          className="filters__item"
          defaultValue={query}
        />

        <input
          type="datetime-local"
          ref={searchFromElRef}
          className="filters__item"
          defaultValue={
            occurred_after
              ? new Date(occurred_after * 1000).toISOString().split('.')[0]
              : ''
          }
        />

        <input
          type="datetime-local"
          ref={searchToElRef}
          className="filters__item"
          defaultValue={
            occurred_before
              ? new Date(occurred_before * 1000).toISOString().split('.')[0]
              : ''
          }
        />

        <input type="submit" value="Find Cases" className="btn" />
      </form>
    </div>
  );
};

export default filters;

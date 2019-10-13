import React from 'react';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <div>
      filter shown with <input value={filter} onChange={onFilterChange}/>
    </div>
  )
}

export default Filter;
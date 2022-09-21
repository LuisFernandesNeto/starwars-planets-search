import React, { useContext } from 'react';
import PlanetsSearchContext from '../context/PlanetsSearchContext';

function Filters() {
  const { setFilter } = useContext(PlanetsSearchContext);
  const filterByText = ({ target: { value } }) => {
    setFilter({ name: value });
  };

  return (
    <div>
      <h5>Filter By Name</h5>
      <input
        name="value"
        type="text"
        data-testid="name-filter"
        onChange={ filterByText }
      />
    </div>
  );
}

export default Filters;

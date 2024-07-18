// src/components/FilterButtons.js
import React, { useState } from 'react';

const FilterButtons = ({ setFilter }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
    setDropdownOpen(false);
  };

  return (
    <div className="filter-buttons" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="btn btn-danger">
        <i className="fas fa-filter"></i>
      </button>
      <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
        <button className="dropdown-item" onClick={() => handleFilterChange('all')}>Todas</button>
        <button className="dropdown-item" onClick={() => handleFilterChange('casas')}>Casas</button>
        <button className="dropdown-item" onClick={() => handleFilterChange('museos')}>Museos</button>
        <button className="dropdown-item" onClick={() => handleFilterChange('vivienda-publica')}>Vivienda Pública</button>
        <button className="dropdown-item" onClick={() => handleFilterChange('ciudad-universitaria')}>Ciudad Universitaria</button>
      </div>
    </div>
  );
};

export default FilterButtons;

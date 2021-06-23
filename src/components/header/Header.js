import React from 'react';
import Navigation from '../navigation/navigation';

import Search from '../search';

const Header = ({ searchItem, filter, onFilterChange }) => {
  return (
    <header className="header">
      <Search searchItem={searchItem} />
      <Navigation filter={filter} onFilterChange={onFilterChange} />
    </header>
  );
};

export default Header;

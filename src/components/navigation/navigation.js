import { Component } from 'react';

import './navigation.css';

export default class Navigation extends Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];
  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const styleClass = isActive ? 'items items-checked' : 'items';
      return (
        <li
          type="button"
          className={styleClass}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </li>
      );
    });
    return (
      <nav className="nav">
        <ul className="nav-list">{buttons}</ul>
      </nav>
    );
  }
}

import React, { Component } from 'react';

import logo from '../../images/content/logo.svg';

export default class Search extends Component {
  state = {
    term: '',
  };

  handleChange = (event) => {
    const term = event.target.value;
    this.setState({ term });
    this.props.searchItem(term);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ term: '' });
  };
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor="search">
          <img className="logo" src={logo} alt="логотип компании Senla" />
        </label>
        <input
          id="search"
          type="search"
          name="search"
          placeholder="Search task for to do"
          term={this.state.term}
          onChange={this.handleChange}
        />
        <button className="btn-search" type="submit"></button>
      </form>
    );
  }
}

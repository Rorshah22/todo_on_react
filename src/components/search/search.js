import React, { Component } from 'react';

import logo from '../../images/content/logo.svg';

export default class Search extends Component {
  state = {
    value: '',
  };

  handleChange = (event) => {
    const term = event.target.value;
    this.setState((previousState) => ({ ...previousState, term }));
    this.props.searchItem(term);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ value: '' });
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
          term={this.state.value}
          onChange={this.handleChange}
        />
        <button className="btn-search" type="submit"></button>
      </form>
    );
  }
}

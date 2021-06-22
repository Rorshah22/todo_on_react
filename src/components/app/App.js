import React, { Component } from 'react';

import Header from '../header';
import Main from '../main';

import './App.css';

export default class App extends Component {
  state = {
    todoData: [],
    term: '',
    navigation: 'all',
  };

  maxId = 1;

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const indx = todoData.findIndex((el) => el.id === id);
      const newArray = [
        ...todoData.slice(0, indx),
        ...todoData.slice(indx + 1),
      ];

      return {
        todoData: newArray,
      };
    });
  };

  handelOnLiClick = (id) => {
    this.setState(({ todoData }) => {
      const indx = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[indx];

      const newItem = { ...oldItem, done: !oldItem.done };

      const newArray = [
        ...todoData.slice(0, indx),
        newItem,
        ...todoData.slice(indx + 1),
      ];

      return { todoData: newArray };
    });
  };

  handelOnMarkImportant = (id) => {
    this.setState(({ todoData }) => {
      const indx = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[indx];

      const newItem = { ...oldItem, important: !oldItem.important };

      const newArray = [
        ...todoData.slice(0, indx),
        newItem,
        ...todoData.slice(indx + 1),
      ];

      return { todoData: newArray };
    });
  };
  addTask = (text) => {
    const newTask = {
      label: text,
      important: false,
      done: false,
      id: this.maxId++,
    };
    this.setState(({ todoData }) => {
      if (!text) return;
      const newArray = [...todoData, newTask];
      localStorage.setItem('task', newTask.label);
      return { todoData: newArray };
    });
  };

  searchItem = (term) => {
    this.setState({ term });
  };
  onFilterChange = (navigation) => {
    this.setState({ navigation });
  };
  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  filter(items, navigation) {
    switch (navigation) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  render() {
    const { todoData, term, navigation } = this.state;

    const visibleItems = this.filter(this.search(todoData, term), navigation);

    return (
      <div className="App">
        <div className="container">
          <div
            className="background-image"
            onClick={() => console.log(this.state)}
          ></div>
          <Header
            searchItem={this.searchItem}
            filter={navigation}
            onFilterChange={this.onFilterChange}
          />
          <Main
            todos={visibleItems}
            handleOnDeleted={this.deleteItem}
            handleAddTask={this.addTask}
            handelOnLiClick={this.handelOnLiClick}
            handelOnMarkImportant={this.handelOnMarkImportant}
          />
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class AddTask extends Component {
  state = {
    value: '',
  };

  handleChange = (event) => {
    if (event.target.value.trim().length === 0) {
      alert('contains only spaces!');
    }
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddTask(this.state.value);
    this.setState({ value: '' });
  };
  handleEnterPress = (event) => {
    if (event.keyCode === 13) {
      this.handleSubmit(event);
    }
  };

  render() {
    const dis = this.state.value === '' ? true : false;
    return (
      <section className="field-add-task">
        <form
          className="field-add-task__form"
          onSubmit={this.handleSubmit}
          onKeyUp={this.handleEnterPress}
        >
          <label htmlFor="new-task">New Task</label>
          <textarea
            className="new-task"
            id="new-task"
            maxLength="120"
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>
          {/* <span className="count-char">
      Осталось символов: <output className="char-length">120</output>{' '}
    </span> */}

          <button type="submit" className="btn btn-add-task" disabled={dis}>
            ADD
          </button>
        </form>
      </section>
    );
  }
}

import React from 'react';

import ToDoListItem from '../todo-list-item';

const ToDoList = ({
  task,
  handleOnDeleted,
  handelOnLiClick,
  handelOnMarkImportant,
}) => {
  const elements = task.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <ToDoListItem
        key={id}
        {...itemProps}
        handleOnDeleted={() => handleOnDeleted(id)}
        handelOnLiClick={(event) => handelOnLiClick(id, event)}
        handelOnMarkImportant={() => handelOnMarkImportant(id)}
      />
    );
  });
  return (
    <section className="list">
      <ul className="todo-list">{elements}</ul>
    </section>
  );
};

export default ToDoList;

import React from 'react';
import AddTask from '../add-task/add-task';
import ToDoList from '../todo-list/todo-list';

const Main = ({
  todos,
  handleOnDeleted,
  handleAddTask,
  handelOnLiClick,
  handelOnMarkImportant,
}) => {
  return (
    <main className="main">
      <AddTask handleAddTask={handleAddTask} />
      <ToDoList
        task={todos}
        handleOnDeleted={handleOnDeleted}
        handelOnLiClick={handelOnLiClick}
        handelOnMarkImportant={handelOnMarkImportant}
      />
    </main>
  );
};

export default Main;

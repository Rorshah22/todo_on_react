import { Component } from 'react';

export default class ToDoListItem extends Component {
  render() {
    const {
      done,
      important,
      label,
      handleOnDeleted,
      handelOnLiClick,
      handelOnMarkImportant,
    } = this.props;

    let classP = 'todo-task__text done-task-after-none';
    let classBtnMark = 'btn-mark-important';
    let textBtnMark = 'MARK IMPORTANT';
    let classLi = 'todo-task';

    if (done) {
      classP += ' done-task';
      classBtnMark += ' btn-mark-important-hidden';
    }

    if (important) {
      classP += ' mark-important';
      classBtnMark += ' btn-mark-not-important';
      textBtnMark = 'NOT IMPORTANT';
    }

    return (
      <li className={classLi}>
        <p className={classP} onClick={handelOnLiClick}>
          {label}
        </p>
        <button className={classBtnMark} onClick={handelOnMarkImportant}>
          {textBtnMark}
        </button>
        <button className="btn-clear" onClick={handleOnDeleted}></button>
      </li>
    );
  }
}

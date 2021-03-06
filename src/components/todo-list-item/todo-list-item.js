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

    if (important) {
      classP += '1 mark-important ';
      classBtnMark += ' btn-mark-not-important';
      textBtnMark = 'NOT IMPORTANT';
    }
    if (done) {
      classP += ' done-task ';
      classBtnMark += ' btn-mark-important-hidden';
    }

    return (
      <li className={classLi} onClick={handelOnLiClick}>
        <p className={classP}>{label}</p>
        <button className={classBtnMark} onClick={handelOnMarkImportant}>
          {textBtnMark}
        </button>
        <button className="btn-clear" onClick={handleOnDeleted}></button>
      </li>
    );
  }
}

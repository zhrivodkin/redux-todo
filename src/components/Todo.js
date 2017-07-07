import React, { PropTypes } from 'react'

const Todo = ({ onClick, onRemove, completed, text }) => (
  <li className={'g-todolist__item' + (completed ? ' completed' : '')} >
    <span className='g-todolist__item-title' onClick={onClick}>{text}</span>
    <span className='g-todolist__item-del' onClick={onRemove}></span>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form className='g-form' onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          input.focus()
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => { input = node }}
          type='text'
          className='g-input'
        />
        <button type='submit' className='g-submit'>
          ADD
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
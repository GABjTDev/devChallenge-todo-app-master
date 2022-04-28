import React from 'react'
import TodoInput from './TodoInput'
import Todo from './Todo'

const All = ({todos, setTodos}) => {

  return (
    <>
      <TodoInput todos={todos} setTodos={setTodos} />
      <div className='todos'>
        {
          todos.length > 0 ?
            todos.map(todo => <Todo key={todo.id} {...todo} todos={todos} setTodos={setTodos} /> )
          :
          <p>Add New Tasks!</p>
        }
      </div>
    </>
  )
}

export default All
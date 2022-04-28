import React from 'react'
import TodoInput from './TodoInput'
import Todo from './Todo'


const Active = ({todos, setTodos}) => {

  return (
    <>
      <TodoInput todos={todos} setTodos={setTodos} />
      <div className='todos'>
        {
          todos.filter(active => active.status === false).length > 0 ?
            todos
              .filter(active => active.status === false)
              .map(todo => <Todo key={todo.id} {...todo} todos={todos} setTodos={setTodos} /> )
          :
          <p>No Tasks Actives!</p>
        }
      </div>
    </>
  )
}

export default Active
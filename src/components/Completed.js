import React from 'react';
import Swal from 'sweetalert2';
import Todo from './Todo';

const Completed = ({todos, setTodos}) => {

  const deleteAll = () => {
    Swal.fire({
      title: `Are you sure delete all completed?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3068b1',
      cancelButtonColor: '#EB5757',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
          const newTodos = todos.filter(todo => todo.status !== true);
          setTodos(newTodos);
          localStorage.setItem('todoReact', JSON.stringify(newTodos));
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
    })
  }

  return (
    <>
      <div className='todos'>
        {
          todos.filter(active => active.status === true).length > 0 ?
            todos
              .filter(active => active.status === true)
              .map(todo => <Todo key={todo.id} {...todo} todos={todos} setTodos={setTodos} pageDelete={true} /> )
            :
            <p>No Tasks Completed!</p>
        }
      </div>
      {
        todos.filter(active => active.status === true).length !== 0 &&
        <button className='btn-deleted' onClick={deleteAll}><span className="material-icons">delete_outline</span>Delete all</button>
      }
      
    </>
  )
}

export default Completed
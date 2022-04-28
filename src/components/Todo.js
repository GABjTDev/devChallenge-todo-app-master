import React from 'react'
import Swal from 'sweetalert2';
import 'animate.css';

const Todo = ({id, todo, status, todos, setTodos, pageDelete}) => {

  const handleCheck = (e) => {

    const ID = Number(e.target.id);
    const updateTodos = [...todos];

    updateTodos.map(todo => {

      if(todo.id === ID){
        todo.status = e.target.checked;
      }

      return todo

    })


    localStorage.setItem('todoReact', JSON.stringify(updateTodos));
    setTodos(updateTodos);
  }

  const handleDelete = (id) => {
    
    Swal.fire({
      title: `Are you sure delete ${todo}?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3068b1',
      cancelButtonColor: '#EB5757',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
          const newTodos = todos.filter(todo => todo.id !== id);
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
    <div className='todo animate__animated animate__fadeInDown'>
      <input type='checkbox' onChange={handleCheck} name={todo} id={id} checked={status} />
      <label htmlFor={id} className={status? "line" : ""}>{todo}</label>
      {
        pageDelete &&
          <button className='btn-trash' onClick={() => handleDelete(id)}><span className="material-icons">delete_outline</span></button>
      }
    </div>
  )
}

export default Todo
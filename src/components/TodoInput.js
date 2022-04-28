import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const TodoInput = ({todos, setTodos}) => {

  const formik = useFormik({
    initialValues: {
      todo: '',
      status: false,
      id: null
    },
    validationSchema: Yup.object({
      todo: Yup.string()
        .min(5,  'Min be 5 characters or more')
        .max(25, 'Must be 25 characters or less')
        .required('Required')
    }),
    onSubmit: values => {

      let Todos = null;
      const newTodo = {
        ...values,
        id: new Date().getMilliseconds() * new Date().getSeconds()
      }

      if(todos.length === 0){
        Todos = [];
        Todos.push(newTodo);
        localStorage.setItem('todoReact', JSON.stringify(Todos));
      }else{
        Todos = JSON.parse(localStorage.getItem('todoReact'));
        Todos.push(newTodo)
        localStorage.setItem('todoReact', JSON.stringify(Todos));
      }

      setTodos(Todos);
      formik.resetForm();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="form">
        <input 
          type="text" 
          id="todo" 
          name="todo" 
          placeholder="add details" 
          className="input"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.todo}
          autoComplete="off"
        />
        <button type="submit" className="btn-add">Add</button>
      </form>
      <div className='messageError'>
        { formik.touched.todo && formik.errors.todo ? <div>{formik.errors.todo}</div> : null }
      </div>
    </>
  )
}

export default TodoInput
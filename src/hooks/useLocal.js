import {useState, useEffect} from 'react'

const useLocal = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {

    if(localStorage.getItem('todoReact')){
      setTodos(JSON.parse(localStorage.getItem('todoReact')))
    }

  }, [])

  return {
    todos,
    setTodos
  }

}

export default useLocal
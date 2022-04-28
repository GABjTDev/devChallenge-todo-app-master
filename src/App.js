import NavStatus from "./components/NavStatus";
import {
  Routes,
  Route,
} from "react-router-dom";
import All from "./components/All";
import Active from "./components/Active";
import Completed from "./components/Completed";
import ErrorPage from "./components/ErrorPage";
import useLocal from "./hooks/useLocal";


function App() {

  const {todos, setTodos} = useLocal();

  return (
    <div className="container">
      <h1>#todo</h1>
      <NavStatus />
      <main className="main">
        <Routes>
          <Route exact path="/" element={<All todos={todos} setTodos={setTodos} />} />
          <Route exact path="/active" element={<Active todos={todos} setTodos={setTodos} />} />
          <Route exact path="/completed" element={<Completed todos={todos} setTodos={setTodos} />} />
          <Route exact path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
      <footer>
        <p>Created by <a href="https://github.com/GABjTDev" target='_blank' rel="noreferrer">Gabriel Rea</a> - <a href="https://devchallenges.io/" target='_blank' rel="noreferrer">devChallenges.io</a></p>
      </footer>
    </div>
  );
}

export default App;

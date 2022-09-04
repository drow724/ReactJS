import { useState, useEffect } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setTodo("");
  }

  return <div>
    <h1>My To Dos {toDos.length}</h1>
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
      <button>Add to Do</button>
    </form>
    <hr />
    {toDos.map((item, index) => <li key={index}>{item}</li>)}
  </div>
}

export default App;

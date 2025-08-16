import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');


  useEffect(() => {
    fetchTodos(); 
  }, []);


const fetchTodos = async () => {
  const res = await axios.get('http://localhost:5000/api/todos');
  setTodos(res.data);
};


const addTodo = async () => {
    if (!task) return;
    try {
      const res = await axios.post('http://localhost:5000/api/todos', {
        task, // Not "title"
      });
      setTodos([...todos, res.data]);
      setTask('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };
  

const deleteTodo = async (id) => {
  await axios.delete(`http://localhost:5000/api/todos/${id}`);
  setTodos(todos.filter(todo => todo.id !== id));
};


return (
  <div style={{ padding: '20px' }}>
    <h1>Todo List</h1>
    <input
      type="text"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      placeholder="Add a new task"
    />
    <button onClick={addTodo}>Add Todo</button>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.task}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);
}

export default App;
import { useEffect, useState } from 'react';
import './App.css';
import TaskList from './TaskList';

const TaskURL = "http://localhost:3000/tasks"

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(TaskURL).then(res => res.json()).then(json => setTasks(json));
  }, [])

  return (
    <div className="App">
      <h1>One Thing Well</h1>
      <h2>Testing Tasks:</h2>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;

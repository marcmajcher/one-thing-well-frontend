export default function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.description}</li>
      ))}
    </ul>
  );
}

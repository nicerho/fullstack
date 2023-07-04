export default function ListTodosComponent() {
  const today = new Date();
  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  );
  const todos = [
    { id: 1, description: "wow1", done: false, targetDate: targetDate },
    { id: 2, description: "wow2", done: false, targetDate: targetDate },
    { id: 3, description: "wow3", done: false, targetDate: targetDate },
  ];
  return (
    <div className="container">
      <h1>할일목록</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <td>Id</td>
              <td>Description</td>
              <td>is done</td>
              <td>TargetDate</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toDateString()}</td>
              </tr>
            ))}
            <tr>
              <td>{todos.id}</td>
              <td>{todos.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

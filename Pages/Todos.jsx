import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Todos = () => {
  const { id } = useParams();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
      .then(response => response.json())
      .then(json => setTodos(json))
      .catch(error => console.error('Error fetching todos:', error));
  }, [id]);

  if (todos.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto rounded-lg bg-gray-800 p-8 shadow-lg">
          <h1 className="mb-6 text-center text-2xl font-bold text-white">
            Todos for User {id}
          </h1>
          <div className="text-white">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto rounded-lg bg-gray-800 p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold text-white">
          Todos for User {id}
        </h1>
        <ul className="space-y-4 text-white">
          {todos.map(todo => (
            <li key={todo.id}>
              <div className="font-semibold">{todo.title}</div>
              <div>Completed: {todo.completed ? '✅' : '❌'}</div>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-center space-x-4">
          <Link to={`/User/${id}`}>
            <button className="rounded-lg bg-gray-600 px-4 py-2 text-white hover:bg-gray-500">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Todos;

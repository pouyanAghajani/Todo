import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto rounded-lg bg-gray-800 p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold text-white">
          Users
        </h1>
        {user.length === 0 ? (
          <p className="text-center text-gray-300">Loading...</p>
        ) : (
          <ul className="space-y-6">
            {user.map(u => (
              <li
                key={u.id}
                className="rounded-lg border border-gray-600 bg-gray-700 p-6 shadow-sm"
              >
                <Link to={`/user/${u.id}`}>
                  <p className="text-lg font-semibold text-white">
                    Name: {u.name}
                  </p>
                  <p className="text-gray-300">Username: {u.username}</p>
                  <p className="text-gray-300">Email: {u.email}</p>
                  <p className="text-gray-300">Phone: {u.phone}</p>
                  <p className="text-gray-300">Website: {u.website}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Users;

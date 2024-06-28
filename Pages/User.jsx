import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const User = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(json => setUser(json))
      .catch(error => console.error('Error fetching user:', error));
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto rounded-lg bg-gray-800 p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold text-white">
          User {id} Details
        </h1>
        <div className="space-y-4">
          <div className="text-white">
            <p>
              <span className="font-semibold">Name:</span> {user.name}
            </p>
            <p>
              <span className="font-semibold">Username:</span> {user.username}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {user.phone}
            </p>
            <p>
              <span className="font-semibold">Website:</span> {user.website}
            </p>
          </div>
          <div className="text-white">
            <h2 className="font-semibold">Address</h2>
            <p>
              <span className="font-semibold">Street:</span>{' '}
              {user.address.street}
            </p>
            <p>
              <span className="font-semibold">Suite:</span> {user.address.suite}
            </p>
            <p>
              <span className="font-semibold">City:</span> {user.address.city}
            </p>
            <p>
              <span className="font-semibold">Zipcode:</span>{' '}
              {user.address.zipcode}
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold">Geo</h3>
            <p>
              <span className="font-semibold">Latitude:</span>{' '}
              {user.address.geo.lat}
            </p>
            <p>
              <span className="font-semibold">Longitude:</span>{' '}
              {user.address.geo.lng}
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold">Company</h3>
            <p>
              <span className="font-semibold">Name:</span> {user.company.name}
            </p>
            <p>
              <span className="font-semibold">Catch Phrase:</span>{' '}
              {user.company.catchPhrase}
            </p>
            <p>
              <span className="font-semibold">Bs:</span> {user.company.bs}
            </p>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <Link to={`/User/todos/${id}`}>
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">
                Todos
              </button>
            </Link>
            <Link to={`/User/Posts/${id}`}>
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">
                Posts
              </button>
            </Link>
            <Link to={`/User/Albums/${id}`}>
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">
                Albums
              </button>
            </Link>
            <Link to="/">
              <button className="rounded-lg bg-gray-600 px-4 py-2 text-white hover:bg-gray-500">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

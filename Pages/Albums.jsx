import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Albums = () => {
  const { id } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums?userId=${id}`,
        );
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.log('Error fetching albums:', error);
      }
    };
    fetchAlbums();
  }, [id]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto rounded-lg bg-gray-800 p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold text-white">
          Albums for User {id}
        </h1>
        {albums.length > 0 ? (
          <div className="space-y-4">
            {albums.map(al => (
              <Link to={`/User/Albums/Photos/${al.id}`} key={al.id}>
                <div className="mb-2 rounded-lg border-2 border-solid border-blue-600 bg-gray-600 p-2 font-semibold text-white hover:bg-blue-500">
                  {al.title}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-white">Loading...</div>
        )}
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

export default Albums;

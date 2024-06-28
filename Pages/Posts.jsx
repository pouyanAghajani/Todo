import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Comments from './Comments';

const Posts = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [flag, setFlag] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(response => response.json())
      .then(json => {
        setPosts(json);
        setFlag(Array(posts.length).fill(false));
      })
      .catch(error => console.log('Error fetching posts', error));
  }, [id, posts.length]);

  if (posts.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto rounded-lg bg-gray-800 p-8 shadow-lg">
          <h1 className="mb-6 text-center text-2xl font-bold text-white">
            Posts for User {id}
          </h1>
          <div className="text-white">Loading...</div>
        </div>
      </div>
    );
  }
  function flagHandler(index) {
    const newFlag = [...flag];
    newFlag[index] = !newFlag[index];
    setFlag(newFlag);
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto rounded-lg bg-gray-800 p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold text-white">
          Posts for User {id}
        </h1>
        <ul className="space-y-4 text-white">
          {posts.map((ps, index) => (
            <li
              key={ps.id}
              className="border-2 border-solid border-blue-600 p-4"
            >
              <div className="bg-gray-600 pl-2 font-semibold">{ps.title}</div>
              <div>{ps.body}</div>
              <div className="flex">
                <span
                  onClick={() => flagHandler(index)}
                  onKeyDown={e =>
                    e.key === 'Enter' ? flagHandler(index) : null
                  }
                  className="mt-[3px] cursor-pointer font-semibold"
                >
                  Comments
                </span>
                <button
                  onClick={() => flagHandler(index)}
                  className="rounded-lg text-2xl font-semibold text-white"
                >
                  {flag[index] ? '🔺' : '🔻'}
                </button>
              </div>
              {flag[index] ? <Comments posId={ps.id} /> : null}
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

export default Posts;

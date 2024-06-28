import { useEffect, useState } from 'react';

const Comments = ({ posId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posId}`)
      .then(response => response.json())
      .then(json => setComments(json));
  }, [posId]);
  return (
    <div>
      {comments.length > 0 ? (
        comments.map(cm => (
          <ul
            key={cm.id}
            className="mb-2 border-2 border-solid border-blue-600 p-2"
          >
            <li className="bg-gray-600 pl-2 font-semibold">{cm.name}</li>
            <li className="bg-blue-600 pl-2">{cm.email}</li>
            <li className="bg-gray-600 p-2">{cm.body}</li>
          </ul>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default Comments;

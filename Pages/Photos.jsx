import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [flags, setFlags] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos?albumId=${id}`,
        );
        const data = await response.json();
        setPhotos(data);
        setFlags(Array(data.length).fill(false)); // اصلاح: استفاده از طول داده‌های واکشی شده به جای طول photos
      } catch (error) {
        console.log('Error Fetching Photos', error);
      }
    };
    fetchPhotos();
  }, [id]);

  function photosHandler(i) {
    const flag = [...flags];
    flag[i] = !flag[i];
    setFlags(flag);
  }

  return (
    <div className="bg-gray-600">
      <div className="flex flex-wrap justify-center gap-1">
        {photos.length > 0 ? (
          photos.map((ph, index) => (
            <div
              className={`${flags[index] ? 'absolute top-[50vh] border-4 border-solid border-red-600' : 'flex flex-col border-4 border-solid border-blue-600'}`}
              key={ph.id}
              onClick={() => photosHandler(index)}
              onKeyDown={() => console.log('okay')}
            >
              <img
                src={flags[index] ? `${ph.url}` : `${ph.thumbnailUrl}`}
                alt="Error"
              />
              <p
                className={`flex h-full items-center p-2 text-center font-semibold text-white ${flags[index] ? 'w-[600px] bg-red-600' : 'w-[150px] bg-blue-600'}`}
              >
                {ph.title}
              </p>
            </div>
          ))
        ) : (
          <div className="flex h-screen items-center justify-center text-8xl font-semibold text-white">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
};

export default Photos;

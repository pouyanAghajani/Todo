import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Users = lazy(() => import('../Pages/Users'));
const User = lazy(() => import('../Pages/User'));
const Todos = lazy(() => import('../Pages/Todos'));
const Posts = lazy(() => import('../Pages/Posts'));
const Albums = lazy(() => import('../Pages/Albums'));
const Photos = lazy(() => import('../Pages/Photos'));

const Rout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/User/:id" element={<User />} />
        <Route path="/User/todos/:id" element={<Todos />} />
        <Route path="/User/Posts/:id" element={<Posts />} />
        <Route path="/User/Albums/:id" element={<Albums />} />
        <Route path="/User/Albums/Photos/:id" element={<Photos />} />
      </Routes>
    </Suspense>
  );
};

export default Rout;

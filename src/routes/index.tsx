import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/index.js';
import Layout from '../layout/index.js';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

import { lazy } from 'react';

import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import { AdvertsList } from './AdvertsList/AdvertsList';

const HomePage = lazy(() => import('../pages/Home.jsx'));
const AdvertsPage = lazy(() => import('../pages/Adverts.jsx'));
const FavoritesPage = lazy(() => import('../pages/Favorites.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/adverts" element={<AdvertsPage />}>
          <Route index element={<AdvertsList />} />
        </Route>

        <Route path="/favorites" element={<FavoritesPage />}>
          <Route index element={<AdvertsList />} />
        </Route>
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

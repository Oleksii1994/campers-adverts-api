import { useEffect } from 'react';

import {
  // useSelector,
  useDispatch,
} from 'react-redux';
import { lazy } from 'react';
// import  selectAdvertsArr,
// selectIsLoading,
// selectError,
// '../redux/selectors';

import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import { fetchAdverts } from '../redux/operations';

const HomePage = lazy(() => import('../pages/Home.jsx'));
const AdvertsPage = lazy(() => import('../pages/Adverts.jsx'));
const FavoritesPage = lazy(() => import('../pages/Favorites.jsx'));

export const App = () => {
  const dispatch = useDispatch();

  // const advertsArr = useSelector(selectAdvertsArr);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/adverts" element={<AdvertsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

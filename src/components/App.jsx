// import { useEffect } from 'react';

// import {
// useSelector,
// useDispatch,
// } from 'react-redux';
import { lazy } from 'react';
// import  selectAdvertsArr,
// selectIsLoading,
// selectError,
// '../redux/selectors';

import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import { AdvertsList } from './AdvertsList/AdvertsList';
import { Modal } from './ModalInfo/ModalInfo';
// import { fetchAdverts } from '../redux/operations';

const HomePage = lazy(() => import('../pages/Home.jsx'));
const AdvertsPage = lazy(() => import('../pages/Adverts.jsx'));
const FavoritesPage = lazy(() => import('../pages/Favorites.jsx'));
// const ModalInfo = lazy(() => import('../components/ModalInfo/ModalInfo'));
// const CamperFeatures = lazy(() => import('./CamperFeatures/CamperFeatures'));
// const CamperReviews = lazy(() => import('./CamperReviews/CamperReviews'));

export const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAdverts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/adverts" element={<AdvertsPage />}>
          <Route index element={<AdvertsList />} />
          <Route path=":id" element={<Modal />}>
            {/* <Route path="features" element={<CamperFeatures />} />
            <Route path="reviews" element={<CamperReviews />} /> */}
          </Route>
        </Route>
        <Route path="/favorites" element={<FavoritesPage />}>
          <Route index element={<AdvertsList />} />
          <Route path=":id" element={<Modal />}>
            {/* <Route path="features" element={<CamperFeatures />} />
            <Route path="reviews" element={<CamperReviews />} /> */}
          </Route>
        </Route>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

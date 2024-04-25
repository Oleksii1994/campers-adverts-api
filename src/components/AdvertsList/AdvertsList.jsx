import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {
  selectAdvertsArr,
  // selectIsLoading,
  // selectError
} from '../../redux/selectors';
import { fetchAdverts } from '../../redux/operations';
import { AdvertItem } from 'components/AdvertItem/AdvertItem';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { ListAdvertsContainer } from './AdvertsList.styled';
import { Notify } from 'notiflix';

export const AdvertsList = () => {
  const [dataToRender, setDataToRender] = useState([]);
  const [countData, setCountData] = useState(4);
  const [loadMoreBtnShown, setLoadMoreBtnShown] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const adverts = useSelector(selectAdvertsArr);

  // const advertsArr =
  //   pathname === '/adverts'
  //     ? adverts
  //     : JSON.parse(localStorage.getItem('favorites'));

  const handleLoadMore = () => {
    const newCount = countData + 4;
    setDataToRender(adverts.slice(0, newCount));
    setCountData(newCount);

    if (newCount >= adverts.length) {
      setLoadMoreBtnShown(false);
      Notify.info("Oops, there's no more adverts");
    } else {
      setLoadMoreBtnShown(newCount <= adverts.length);
    }
  };

  const updateFavorites = () => {
    const updatedFavorites =
      JSON.parse(localStorage.getItem('favorites')) || [];

    if (pathname === '/adverts') {
      return;
    }
    setDataToRender(updatedFavorites);
  };

  useEffect(() => {
    const storageFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (!storageFavorites) {
      localStorage.setItem('favorites', JSON.stringify([]));
    }
  });

  useEffect(() => {
    if (pathname === '/adverts') {
      dispatch(fetchAdverts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    const advertsArr =
      pathname === '/adverts'
        ? adverts
        : JSON.parse(localStorage.getItem('favorites'));
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setDataToRender(
      pathname === '/favorites'
        ? storedFavorites
        : advertsArr.slice(0, countData)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adverts, countData]);

  useEffect(() => {
    const advertsArr =
      pathname === '/adverts'
        ? adverts
        : JSON.parse(localStorage.getItem('favorites'));
    if (pathname === '/adverts' && advertsArr.length > 0) {
      setDataToRender(advertsArr.slice(0, countData));
      setLoadMoreBtnShown(advertsArr.length > countData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adverts, countData]);

  return (
    <ListAdvertsContainer>
      <ul>
        {dataToRender.map(
          ({
            _id,
            gallery,
            name,
            price,
            rating,
            reviews,
            location,
            description,
            details,
            adults,
            transmission,
            engine,
            form,
            length,
            width,
            height,
            tank,
            consumption,
          }) => (
            <AdvertItem
              key={_id}
              _id={_id}
              gallery={gallery}
              name={name}
              price={price}
              rating={rating}
              reviews={reviews}
              location={location}
              description={description}
              details={details}
              adults={adults}
              transmission={transmission}
              engine={engine}
              onUpdateFavorites={updateFavorites}
              form={form}
              length={length}
              width={width}
              height={height}
              tank={tank}
              consumption={consumption}
            />
          )
        )}
      </ul>
      {loadMoreBtnShown && <LoadMoreBtn onClick={handleLoadMore} />}
    </ListAdvertsContainer>
  );
};

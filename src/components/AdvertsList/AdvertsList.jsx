import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
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

  const advertsArr = useSelector(selectAdvertsArr);

  const handleLoadMore = () => {
    const newCount = countData + 4;
    setDataToRender(advertsArr.slice(0, newCount));
    setCountData(newCount);

    if (newCount >= advertsArr.length) {
      setLoadMoreBtnShown(false);
      Notify.info("Oops, there's no more adverts");
    } else {
      setLoadMoreBtnShown(newCount <= advertsArr.length);
    }
  };

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setDataToRender(
      pathname === '/favorites'
        ? storedFavorites
        : advertsArr.slice(0, countData)
    );
  }, [pathname, countData, advertsArr]);

  useEffect(() => {
    if (pathname === '/adverts' && advertsArr.length > 0) {
      setDataToRender(advertsArr.slice(0, countData));
      setLoadMoreBtnShown(advertsArr.length > countData);
    }
  }, [pathname, advertsArr, countData]);

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
            />
          )
        )}
      </ul>
      {loadMoreBtnShown && <LoadMoreBtn onClick={handleLoadMore} />}
    </ListAdvertsContainer>
  );
};

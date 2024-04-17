import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
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
  // const [favorites, setFavorites] = useState([]);

  const dispatch = useDispatch();

  const advertsArr = useSelector(selectAdvertsArr);

  const handleLoadMore = () => {
    const newCount = countData + 4;
    if (newCount >= advertsArr.length) {
      setLoadMoreBtnShown(false);
      Notify.info("Oops, there's no more adverts");
    } else {
      setDataToRender(advertsArr.slice(0, newCount));
      setCountData(newCount);
      setLoadMoreBtnShown(newCount < advertsArr.length);
    }
  };

  useEffect(() => {
    const favoritesLS = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favoritesLS.length > 0) {
      return;
    }

    localStorage.setItem('favorites', JSON.stringify([]));
  }, []);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  useEffect(() => {
    if (advertsArr.length > 0) {
      setDataToRender(advertsArr.slice(0, countData));
      setLoadMoreBtnShown(advertsArr.length > countData);
    }
  }, [advertsArr, countData]);

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
              id={_id}
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

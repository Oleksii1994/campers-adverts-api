import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectAdvertsArr,
  // selectIsLoading,
  // selectError
} from '../../redux/selectors';
import { fetchAdverts } from '../../redux/operations';
import { AdvertItem } from 'components/AdvertItem/AdvertItem';

export const AdvertsList = () => {
  const dispatch = useDispatch();

  const advertsArr = useSelector(selectAdvertsArr);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <ul>
      {advertsArr.map(
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
  );
};

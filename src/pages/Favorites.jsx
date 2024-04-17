import { useState, useEffect } from 'react';

import { ListAdvertsContainer } from 'components/AdvertsList/AdvertsList.styled';
import { AdvertItem } from 'components/AdvertItem/AdvertItem';
// import { LoadMoreBtn } from "components/LoadMoreBtn/LoadMoreBtn";

const FavoritesPage = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const favorites = JSON.parse(localStorage.getItem('favorites'));

  useEffect(() => {
    // if (favorites.length === 0) {
    //   return;
    // }
    setFavoriteItems(favorites);
  }, [favorites]);

  // useEffect(() => {

  // }, [favoriteItems]);

  return (
    <ListAdvertsContainer>
      <ul>
        {favoriteItems.map(
          ({
            id,
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
              key={name}
              id={id}
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
      {/* {loadMoreBtnShown && <LoadMoreBtn onClick={handleLoadMore} />} */}
    </ListAdvertsContainer>
  );
};

export default FavoritesPage;

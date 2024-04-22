import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  createShortDescription,
  createShorterTitle,
  createPrice,
  checkDetailsInfo,
} from 'helpers/helpers';

import Sprite from '../../img/symbol-defs.svg';
import {
  StyledCard,
  CardInfoBox,
  CardPhoto,
  CardTitle,
  PriceWrapper,
  TitlePriceBox,
  Price,
  RatingLocationWrapper,
  RatingBox,
  LocationBox,
  Description,
  FavoritesHeartBtn,
  DetailsList,
  DetailItem,
  DetailText,
} from './AdvertItem.styled';
import { Modal } from '../ModalInfo/ModalInfo';
import { ShowMoreBtn } from 'components/ShowMoreBtn/ShowMoreBtn';
// import { Notify } from 'notiflix';

export const AdvertItem = ({
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
  onUpdateFavorites,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const closeModal = () => {
    setModalShow(!modalShow);
    const currentPage = pathname.split('/').slice(0, 2).join('/');
    if (currentPage === '/adverts') {
      navigate('/adverts');
    } else if (currentPage === '/favorites') {
      navigate('/favorites');
    }
  };

  const handleShowMore = () => {
    const basePath = pathname.includes('/favorites')
      ? '/favorites'
      : '/adverts';
    navigate(`${basePath}/${_id}`);
    setModalShow(true);
  };

  const normalizedInfoDetails = () => {
    return {
      adults,
      transmission,
      engine: engine,
      airConditioner: details.airConditioner,
      kitchen: details.kitchen,
      beds: details.beds,
    };
  };

  const detailsArray = Object.entries(normalizedInfoDetails());

  const handleAddRemoveFavorites = _id => {
    const arrayFromLS = JSON.parse(localStorage.getItem('favorites'));

    const advertObj = {
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
      favorite: !isFavorite,
    };

    const index = arrayFromLS.findIndex(item => item._id === advertObj._id);

    if (index !== -1) {
      const newArray = arrayFromLS.filter(item => item._id !== advertObj._id);
      localStorage.setItem('favorites', JSON.stringify(newArray));
      setIsFavorite(false);
      onUpdateFavorites();
      return;
    }

    arrayFromLS.push(advertObj);
    setIsFavorite(true);
    localStorage.setItem('favorites', JSON.stringify(arrayFromLS));
    onUpdateFavorites();
  };

  useEffect(() => {
    const arrayFromLS = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(arrayFromLS.some(item => item._id === _id));
  }, [_id]);

  return (
    <StyledCard>
      <CardPhoto src={gallery[0]} alt={name} width="290" />

      <CardInfoBox>
        <TitlePriceBox>
          <CardTitle>{createShorterTitle(name)}</CardTitle>
          <PriceWrapper>
            <Price>{`€${createPrice(price)}`}</Price>
            <FavoritesHeartBtn
              type="button"
              className="favorites-heart-btn"
              onClick={() => handleAddRemoveFavorites(_id)}
            >
              <svg width="24" height="24">
                <use
                  className="fav-btn-use"
                  href={`${Sprite}#icon-heart`}
                  style={{ fill: '#FFFFFF', stroke: '#101828' }}
                ></use>
              </svg>
            </FavoritesHeartBtn>
          </PriceWrapper>
        </TitlePriceBox>
        <RatingLocationWrapper>
          <RatingBox>
            <svg width="16" height="16">
              <use
                href={`${Sprite}#icon-star`}
                style={{ fill: '#FFC531' }}
              ></use>
            </svg>
            <p>
              {rating}
              {`(${reviews.length.toString()} Reviews)`}
            </p>
          </RatingBox>
          <LocationBox>
            <svg width="16" height="16">
              <use
                href={`${Sprite}#icon-map`}
                style={{ fill: '#FFFFFF', stroke: '#101828' }}
              ></use>
            </svg>
            <p>{location}</p>
          </LocationBox>
        </RatingLocationWrapper>

        <Description>{createShortDescription(description)}</Description>

        <DetailsList>
          {detailsArray.map(([key, value]) => {
            return (
              <DetailItem key={key}>
                <svg width="20" height="20">
                  <use href={`${Sprite}#icon-${key}`} />
                </svg>
                <DetailText>{`${checkDetailsInfo(key, value)}`}</DetailText>
              </DetailItem>
            );
          })}
        </DetailsList>
        <ShowMoreBtn onClick={handleShowMore} />
        <Modal show={modalShow} onClose={closeModal} id={_id}>
          <h2>{name}</h2>
          <p>{description}</p>
          {/* Інші деталі camper */}
        </Modal>
      </CardInfoBox>
    </StyledCard>
  );
};

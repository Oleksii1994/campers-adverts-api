import { useState, useEffect } from 'react';

import {
  createShortDescription,
  createShorterTitle,
  createPrice,
  checkDetailsInfo,
} from 'helpers/helpers';

import Sprite from '../../img/symbol-defs.svg';
import { ProductInfo } from 'components/ProductInfo/ProductInfo';
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

export const AdvertItem = ({
  _id,
  gallery,
  name,
  price,
  rating,
  reviews,
  location,
  description,
  children,
  form,
  length,
  width,
  height,
  tank,
  consumption,
  details,
  adults,
  transmission,
  engine,
  onUpdateFavorites,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const closeModal = e => {
    setModalShow(!modalShow);
  };

  const handleShowMore = () => {
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

  const normalizedDetailsFeatures = () => {
    return {
      ...normalizedInfoDetails(),
      CD: details.CD,
      radio: details.radio,
      hob: details.hob,
      freezer: details.freezer,
    };
  };

  const detailsArray = Object.entries(normalizedInfoDetails());

  const detailsForFeatures = Object.entries(normalizedDetailsFeatures());

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
      children,
      form,
      length,
      width,
      height,
      tank,
      consumption,
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
      </CardInfoBox>
      <Modal show={modalShow} onClose={closeModal} id={_id}>
        <ProductInfo
          name={name}
          rating={rating}
          reviews={reviews}
          location={location}
          price={price}
          gallery={gallery}
          description={description}
          details={detailsForFeatures}
          itemdetails={{
            form: form,
            length: length,
            width: width,
            height: height,
            tank: tank,
            consumption: consumption,
          }}
        />
      </Modal>
    </StyledCard>
  );
};

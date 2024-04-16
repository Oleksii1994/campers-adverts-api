import { createShortDescription, createPrice } from 'helpers/helpers';
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
  ShowMoreBtn,
} from './AdvertItem.styled';

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
}) => {
  return (
    <StyledCard>
      <CardPhoto src={gallery[0]} alt={name} width="290" />

      <CardInfoBox>
        <TitlePriceBox>
          <CardTitle>{name}</CardTitle>
          <PriceWrapper>
            <Price>{`€${createPrice(price)}`}</Price>
            <svg width="24" height="24">
              <use
                href={`${Sprite}#icon-heart`}
                style={{ fill: '#FFFFFF', stroke: '#101828' }}
              ></use>
            </svg>
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
              {reviews.length.toString()}
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

        {/* <ul>
          {details.map(({}) => (
            <li>
              <svg width="32" height="22"><use></use></svg>
              <p>{}</p>
            </li>
          ))}
        </ul> */}
        <ShowMoreBtn type="button">Show more</ShowMoreBtn>
      </CardInfoBox>
    </StyledCard>
  );
};

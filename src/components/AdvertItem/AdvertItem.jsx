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
  ShowMoreBtn,
  FavoritesHeartBtn,
  DetailsList,
  DetailItem,
  DetailText,
} from './AdvertItem.styled';

export const AdvertItem = ({
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
}) => {
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
  console.log(detailsArray);

  return (
    <StyledCard>
      <CardPhoto src={gallery[0]} alt={name} width="290" />

      <CardInfoBox>
        <TitlePriceBox>
          <CardTitle>{createShorterTitle(name)}</CardTitle>
          <PriceWrapper>
            <Price>{`€${createPrice(price)}`}</Price>
            <FavoritesHeartBtn type="button" className="favorites-heart-btn">
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
        <ShowMoreBtn type="button">Show more</ShowMoreBtn>
      </CardInfoBox>
    </StyledCard>
  );
};

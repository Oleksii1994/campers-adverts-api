import Sprite from '../../img/symbol-defs.svg';
import { createPrice } from 'helpers/helpers';
import { useState } from 'react';
import { CamperReviews } from 'components/CamperReviews/CamperReviews';
import { CamperFeatures } from 'components/CamperFeatures/CamperFeatures';
import {
  Gallery,
  Title,
  FlexContainer,
  FlexContainerSecond,
  Price,
  Descript,
  FeaturesBtn,
  BtnList,
  BtnItem,
} from './ProductInfo.styled';

export const ProductInfo = ({
  name,
  rating,
  reviews,
  location,
  price,
  gallery,
  description,
  details,
  itemdetails,
}) => {
  const [isFeatures, setIsFeatures] = useState(true);

  const handleClick = () => {
    setIsFeatures(!isFeatures);
  };

  return (
    <div>
      <Title>{name}</Title>
      <FlexContainer>
        <FlexContainerSecond>
          <svg width="16" height="16" fill="#FFC531">
            <use href={`${Sprite}#icon-star`}></use>
          </svg>
          <p>{`${rating}(${reviews.length} Reviews)`}</p>
        </FlexContainerSecond>
        <FlexContainerSecond>
          <svg width="16" height="16" fill="#ffffff" stroke="#000000">
            <use href={`${Sprite}#icon-map`}></use>
          </svg>
          <p>{`${location}`}</p>
        </FlexContainerSecond>
      </FlexContainer>
      <Price>{`€${createPrice(price)}`}</Price>
      <Gallery>
        {gallery.map((item, index) => (
          <li key={index} className="gallery-item">
            <img
              src={item}
              alt={`camper ${index}`}
              width="290"
              height="310"
              className="gallery-item-img"
            />
          </li>
        ))}
      </Gallery>
      <Descript>{description}</Descript>
      <BtnList>
        <BtnItem className={isFeatures ? 'btn-active' : ''}>
          <FeaturesBtn type="button" onClick={handleClick}>
            Features
          </FeaturesBtn>
        </BtnItem>
        <BtnItem className={!isFeatures ? 'btn-active' : ''}>
          <FeaturesBtn type="button" onClick={handleClick}>
            Reviews
          </FeaturesBtn>
        </BtnItem>
      </BtnList>
      <div>
        {isFeatures ? (
          <CamperFeatures details={details} item={itemdetails} />
        ) : (
          <CamperReviews reviews={reviews} />
        )}
      </div>
    </div>
  );
};

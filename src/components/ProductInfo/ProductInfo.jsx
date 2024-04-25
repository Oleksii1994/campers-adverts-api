import Sprite from '../../img/symbol-defs.svg';
import { createPrice } from 'helpers/helpers';
import {
  Gallery,
  Title,
  FlexContainer,
  FlexContainerSecond,
  Price,
  Descript,
} from './ProductInfo.styled';

export const ProductInfo = ({
  name,
  rating,
  reviews,
  location,
  price,
  gallery,
  description,
}) => {
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
    </div>
  );
};

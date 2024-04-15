import { createShortDescription, createPrice } from 'helpers/helpers';
import Sprite from '../../img/symbol-defs.svg';
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
    <li>
      <div>
        <img src={gallery[0]} alt={name} width="290" height="310" />
      </div>
      <div>
        <div>
          <h2>{name}</h2>
          <div>
            <p>{`€${createPrice(price)}`}</p>
            <svg width="16" height="16">
              <use
                href={`${Sprite}#icon-heart`}
                style={{ fill: '#FFFFFF', stroke: '#101828' }}
              ></use>
            </svg>
          </div>
        </div>
        <div>
          <div>
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
          </div>
          <div>
            <svg width="16" height="16">
              <use
                href={`${Sprite}#icon-map`}
                style={{ fill: '#FFFFFF', stroke: '#101828' }}
              ></use>
            </svg>
            <p>{location}</p>
          </div>
        </div>
        <div>
          <p>{createShortDescription(description)}</p>
        </div>

        {/* <ul>
          {details.map(({}) => (
            <li>
              <svg width="32" height="22"><use></use></svg>
              <p>{}</p>
            </li>
          ))}
        </ul> */}
        <button type="button">Show more</button>
      </div>
    </li>
  );
};

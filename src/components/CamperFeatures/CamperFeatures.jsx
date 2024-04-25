import {
  DetailItem,
  DetailText,
} from 'components/AdvertItem/AdvertItem.styled';
import { BookingForm } from 'components/BookForm/BookForm';
import { checkDetailsInfo } from 'helpers/helpers';
import Sprite from '../../img/symbol-defs.svg';

import {
  FeaturesContainer,
  FeaturesInfoBox,
  Title,
  DetailsList,
  FeaturesInfo,
  InfoList,
} from './CamperFeatures.styled';

export const CamperFeatures = ({ item, details }) => {
  const props = Object.entries(item);

  return (
    <FeaturesContainer>
      <FeaturesInfoBox>
        <DetailsList>
          {details.map(([key, value]) => {
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

        <div>
          <Title>Vehicle details</Title>
          <InfoList>
            {props.map(([key, value]) => (
              <li key={key} className="features-info-item">
                <FeaturesInfo>{key}</FeaturesInfo>
                <FeaturesInfo>{value}</FeaturesInfo>
              </li>
            ))}
          </InfoList>
        </div>
      </FeaturesInfoBox>
      <BookingForm />
    </FeaturesContainer>
  );
};

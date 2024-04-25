import {
  DetailItem,
  DetailText,
} from 'components/AdvertItem/AdvertItem.styled';

import { checkDetailsInfo } from 'helpers/helpers';
import Sprite from '../../img/symbol-defs.svg';

import {
  FeaturesInfoBox,
  Title,
  DetailsList,
  FeaturesInfo,
  InfoList,
} from './CamperFeatures.styled';

export const CamperFeatures = ({ item, details }) => {
  const props = Object.entries(item);

  return (
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
  );
};

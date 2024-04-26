import styled from 'styled-components';

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 44px;
  width: 100%;
  align-items: flex-start;

  @media (min-width: 1060px) {
    flex-direction: row;
  }
`;

export const FeaturesInfoBox = styled.div`
  width: 100%;

  // @media (min-width: 768px) {
  //   width: 430px;
  // }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 24px;
`;

export const DetailsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 44px;

  width: 100%;

  // @media (min-width: 768px) {
  //   width: 430px;
  // }
`;

export const InfoList = styled.ul`
  display: flex;
  gap: 14px;
  flex-direction: column;
  padding-top: 24px;
  border-top: 1px solid rgba(16, 24, 40, 0.1);
  width: 100%;

  // @media (min-width: 768px) {
  //   width: 430px;
  // }
`;

export const FeaturesInfo = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 133%;
  text-transform: capitalize;
`;

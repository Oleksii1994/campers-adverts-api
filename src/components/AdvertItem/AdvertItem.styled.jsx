import styled from 'styled-components';

export const StyledCard = styled.li`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  margin-bottom: 32px;
  padding: 24px;
  width: 340px;
  min-height: 358px;
  position: relative;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 760px;
    gap: 16px;
  }

  @media (min-width: 908px) {
    width: 888px;
    justify-content: space-between;
  }
`;

export const CardInfoBox = styled.div`
  width: 294px;
  @media (min-width: 768px) {
    width: 526px;
  }
`;

export const CardPhoto = styled.img`
  margin-bottom: 20px;
  height: 310px;
  object-fit: cover;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const CardTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    align-items: flex-start;
    gap: 10px;
  }

  @media (min-width: 908px) {
    align-items: center;
  }
`;

export const TitlePriceBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;
  }
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
`;

export const FavoritesHeartBtn = styled.button`
  border: none;
  background-color: transparent;

  display: flex;
  align-items: center;

  cursor: pointer;
  position: absolute;
  bottom: 40px;
  right: 20px;

  @media (min-width: 768px) {
    position: static;
  }
`;

export const RatingLocationWrapper = styled.div`
  display: flex;
  gap: 16px;

  margin-bottom: 24px;
`;

export const RatingBox = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const LocationBox = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const Description = styled.p`
  margin-bottom: 24px;

  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #475467;
`;

export const DetailsList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const DetailItem = styled.li`
  display: flex;
  gap: 8px;

  border-radius: 100px;
  padding: 12px 18px;

  height: 44px;

  background-color: #f2f4f7;
`;

export const DetailText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
`;

import styled from 'styled-components';

export const StyledCard = styled.li`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  margin-bottom: 32px;
  padding: 24px;
  width: 888px;
  height: 358px;

  display: flex;
  justify-content: space-between;
`;

export const CardInfoBox = styled.div`
  width: 526px;
`;

export const CardPhoto = styled.img`
  height: 310px;
  object-fit: cover;
`;

export const CardTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TitlePriceBox = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;
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

export const ShowMoreBtn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 200px;
  padding: 16px 40px;
  width: 166px;
  height: 56px;

  background-color: #e44848;

  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;

  &:hover {
    background-color: #d84343;
  }
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
  // width: 143px;
  height: 44px;

  background-color: #f2f4f7;
`;

export const DetailText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
`;

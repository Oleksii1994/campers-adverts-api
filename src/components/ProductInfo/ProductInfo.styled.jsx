import styled from 'styled-components';

export const Gallery = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  margin-bottom: 10px;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

export const FlexContainerSecond = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  margin-bottom: 24px;
`;

export const Descript = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 44px;
  color: #475467;
`;

export const BtnList = styled.ul`
  position: relative;
  display: flex;
  gap: 40px;

  border-bottom: 1px solid rgba(16, 24, 40, 0.2);
`;

export const BtnItem = styled.li`
  height: 48px;
  position: relative;
  top: 3px;
`;

export const FeaturesBtn = styled.button`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  cursor: pointer;

  border: none;
  background-color: transparent;
`;

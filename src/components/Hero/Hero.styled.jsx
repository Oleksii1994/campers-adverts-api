import { Link } from 'react-router-dom';
import heroImage from '../../img/hero.jpg';
import styled from 'styled-components';

// Стилізовані компоненти
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 93vh;
  background-image: url(${heroImage});

  background-size: cover;
  background-position: center;
  color: #fff;
`;

export const Overlay = styled.div`
  background-color: #170b0b69;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 40px 80px;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
`;

export const HeroText = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 30px;
  max-width: 680px;
`;

export const ActionButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 200px;
  padding: 16px 40px;
  min-width: 200px;
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

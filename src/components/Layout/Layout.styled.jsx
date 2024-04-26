import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 12px 60px;
  background-color: #8181810f;
  height: 80px;
  font-weight: 600;
  border-bottom: 1px solid #e44848;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.4); 
}
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #212121;
  &.active {
    color: #e44848;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

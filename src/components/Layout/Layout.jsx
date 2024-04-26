import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Header, Nav, StyledLink, LoaderContainer } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/adverts">Adverts</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </Nav>
      </Header>
      <Suspense
        fallback={
          <LoaderContainer>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#e44848"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </LoaderContainer>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;

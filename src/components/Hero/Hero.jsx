import {
  HeroContainer,
  Overlay,
  HeroTitle,
  HeroText,
  ActionButton,
} from './Hero.styled';

export const HeroSection = () => {
  return (
    <HeroContainer>
      <Overlay>
        <HeroTitle>Discover Your Perfect Camper Truck</HeroTitle>
        <HeroText>
          Explore the best campers available for your next adventure. Choose
          your camper today and start exploring tomorrow!
        </HeroText>
        <ActionButton to="/adverts">Browse Campers</ActionButton>
      </Overlay>
    </HeroContainer>
  );
};

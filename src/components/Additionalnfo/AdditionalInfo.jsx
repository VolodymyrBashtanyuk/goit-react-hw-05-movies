import { Outlet } from 'react-router-dom';
import { SubTitle, Container, LinkStyle } from './AdditionalInfoStyle';

export const AdditionalInfo = () => {
  return (
    <>
      <Container>
        <SubTitle>Additional Information</SubTitle>
        <LinkStyle to={'cast'}>Cast</LinkStyle>
        <LinkStyle to={'reviews'}>Reviews</LinkStyle>
      </Container>
      <Outlet />
    </>
  );
};

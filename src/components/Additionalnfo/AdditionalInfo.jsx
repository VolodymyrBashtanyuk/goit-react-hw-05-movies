import { useLocation } from 'react-router-dom';
import { SubTitle, Container, LinkStyle } from './AdditionalInfoStyle';

export const AdditionalInfo = () => {
  const location = useLocation();
  return (
    <>
      <Container>
        <SubTitle>Additional Information</SubTitle>
        <LinkStyle to={'cast'} state={{ from: location.state.from }}>
          Cast
        </LinkStyle>
        <LinkStyle to={'reviews'} state={{ from: location.state.from }}>
          Reviews
        </LinkStyle>
      </Container>
    </>
  );
};

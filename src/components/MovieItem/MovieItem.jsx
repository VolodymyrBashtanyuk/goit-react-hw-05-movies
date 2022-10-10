import { useLocation } from 'react-router-dom';
import { Wrapper, Item, LinkStyle } from './MovieItemStyle';

export const MovieItem = ({ items }) => {
  const location = useLocation();

  const list = items.map(({ id, title }) => {
    return (
      <Item key={id}>
        <LinkStyle to={`/movies/${id}`} state={{ from: location }}>
          {title}
        </LinkStyle>
      </Item>
    );
  });

  return (
    <>
      <Wrapper>{list}</Wrapper>
    </>
  );
};

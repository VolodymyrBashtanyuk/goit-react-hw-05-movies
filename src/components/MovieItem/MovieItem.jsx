import { Link } from 'react-router-dom';
import { Wrapper, Item, LinkStyle } from './MovieItemStyle';

export const MovieItem = ({ items }) => {
  console.log(items);
  const list = items.map(({ id, title }) => {
    console.log(title);

    return (
      <Item key={id}>
        <LinkStyle to={`movies/${id}`}>{title}</LinkStyle>
      </Item>
    );
  });

  return <Wrapper>{list}</Wrapper>;
};

import { NavLink } from 'react-router-dom';
import { Wrapper, Item } from './NavigationStyle';

export const Navication = () => {
  return (
    <nav>
      <Wrapper>
        <Item>
          <NavLink to="/">Home</NavLink>
        </Item>
        <Item>
          <NavLink to="/movies">Movies</NavLink>
        </Item>
      </Wrapper>
    </nav>
  );
};

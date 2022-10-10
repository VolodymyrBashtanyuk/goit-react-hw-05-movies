import { NavLink, Outlet } from 'react-router-dom';
import { Wrapper, Item } from './NavigationStyle';

export const Navication = () => {
  return (
    <>
      <header>
        <nav>
          <Wrapper>
            <Item>
              <NavLink to="/" end>
                Home
              </NavLink>
            </Item>
            <Item>
              <NavLink to="/movies">Movies</NavLink>
            </Item>
          </Wrapper>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

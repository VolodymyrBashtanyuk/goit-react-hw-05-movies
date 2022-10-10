import { NavLink, Outlet } from 'react-router-dom';
import { Wrapper, Item } from './NavigationStyle';

export const Navication = () => {
  // const getClassName = ({ isActive }) => {
  //   return isActive ? 'active' : 'inactive';
  // };

  return (
    <header>
      <Wrapper>
        <Item>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'active-link' : 'inactive-link'
            }
          >
            Home
          </NavLink>
        </Item>
        <Item>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? 'active-link' : 'inactive-link'
            }
          >
            Movies
          </NavLink>
        </Item>
      </Wrapper>
      <Outlet />
    </header>
  );
};

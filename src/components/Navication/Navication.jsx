import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Wrapper, Item } from './NavigationStyle';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './Navication/Navication';
// import { HomePage } from 'pages/HomePage/HomePage';
// import { MoviesPage } from 'pages/Movies/MoviesPage';
// import { DetailsPage } from 'pages/DetailsPage/DetailsPage';
// import { Cast } from './Additionalnfo/Cast/Cast';
// import { Reviews } from './Additionalnfo/Reviews/Reviews';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/Movies/MoviesPage'));
const DetailsPage = lazy(() => import('pages/DetailsPage/DetailsPage'));
const Cast = lazy(() => import('./Additionalnfo/Cast/Cast'));
const Reviews = lazy(() => import('./Additionalnfo/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<DetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

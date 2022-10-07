import { Route, Routes } from 'react-router-dom';
import { Navication } from './Navication/Navication';
import { HomePage } from 'pages/HomePage/HomePage';
import { MoviesPage } from 'pages/Movies/MoviesPage';
import { DetailsPage } from 'pages/DetailsPage/DetailsPage';
import { Cast } from './Additionalnfo/Cast/Cast';
import { Reviews } from './Additionalnfo/Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Navication />
      <Routes path="/">
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<DetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};

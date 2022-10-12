import { ApiDetails } from 'serviceApi/ServiceApi';
import { AdditionalInfo } from 'components/Additionalnfo/AdditionalInfo';
import { useParams, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Loader } from 'components/Loader/Loader';

const DetailsPage = () => {
  const [details, setDetails] = useState({});
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    fetchDetails(movieId);
  }, [movieId]);

  const fetchDetails = async id => {
    try {
      const apiMoviesDetails = await ApiDetails(id);
      setDetails(apiMoviesDetails);
    } catch (e) {
      setError(true);
    }
  };

  return (
    <>
      {error && <p>Sorry ( please try again</p>}
      {Object.keys(details).length !== 0 && (
        <>
          <MovieDetails data={details} />
          <AdditionalInfo />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default DetailsPage;

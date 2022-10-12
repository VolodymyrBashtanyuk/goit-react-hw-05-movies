import { ApiDetails } from 'serviceApi/ServiceApi';
import { AdditionalInfo } from 'components/Additionalnfo/AdditionalInfo';
import { useParams, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Loader } from 'components/Loader/Loader';

const DetailsPage = () => {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    fetchDetails(movieId);
  }, [movieId]);

  const fetchDetails = async id => {
    setError(false);

    try {
      const api = await ApiDetails(id);
      setDetails(api);
    } catch (e) {
      setError(true);
    } finally {
    }
  };

  return (
    <>
      {error && <p>Sorry ( please try again</p>}
      {details !== null && (
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

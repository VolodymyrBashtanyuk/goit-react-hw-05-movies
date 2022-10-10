import { ApiDetails } from 'serviceApi/ServiceApi';
import { AdditionalInfo } from 'components/Additionalnfo/AdditionalInfo';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
// import { Loader } from 'components/Loader/Loader';

const DetailsPage = () => {
  const [details, setDetails] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    fetchDetails(movieId);
  }, [movieId]);

  const fetchDetails = async id => {
    // setLoading(true);
    setError(false);

    try {
      const api = await ApiDetails(id);
      setDetails(api);
    } catch (e) {
      setError(true);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <>
      {/* {loading && <Loader loading={loading} />} */}
      {error && <p>Sorry ( please try again</p>}
      {details !== null && (
        <>
          <MovieDetails data={details} />
          <AdditionalInfo />
        </>
      )}
    </>
  );
};

export default DetailsPage;

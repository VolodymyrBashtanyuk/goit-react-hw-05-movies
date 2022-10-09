import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ApiReviews } from 'serviceApi/ServiceApi';
import { Loader } from 'components/Loader/Loader';
import { ReviewsList } from './ReviewsList';

export const Reviews = () => {
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();
  const reviews = 'reviews';

  useEffect(() => {
    fetchreviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchreviews = async () => {
    setLoading(true);
    setError(false);

    try {
      const api = await ApiReviews(movieId, reviews);
      setReview(api);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}
      {error && <p>Sorry ( please try again</p>}
      {review !== null && <ReviewsList data={review} />}
    </>
  );
};

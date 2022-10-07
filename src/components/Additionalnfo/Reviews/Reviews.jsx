import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ApiReviews } from 'serviceApi/ServiceApi';

export const Reviews = () => {
  const [review, setReview] = useState(null);

  const { movieId } = useParams();
  const reviews = 'reviews';

  useEffect(() => {
    fetchreviews();
  }, []);

  const fetchreviews = async () => {
    //  setLoading(true);
    // setError('');

    try {
      const api = await ApiReviews(movieId, reviews);
      setReview(api);
    } catch (e) {
      //   setError(e);
    } finally {
      //  setLoading(false);
    }
  };
  console.log(review);

  return <div>sjkdfhjdhf</div>;
};

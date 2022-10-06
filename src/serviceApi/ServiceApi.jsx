import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '9d0cbfdf54c935b25322d86e1e3b7dd0';
const tranding = 'trending/all/day';
const search = 'search/movie';
const details = 'movie';

export const ApiTrending = async () => {
  const responce = await axios.get(`${BASE_URL}/${tranding}?api_key=${KEY}`);
  return responce.data.results;
};

export const ApiSaerch = async name => {
  const responce = await axios.get(
    `${BASE_URL}/${search}?api_key=${KEY}&language=en-US&query=${name}&page=1&include_adult=true`
  );
  return responce.data.results;
};

export const ApiDetails = async id => {
  const responce = await axios.get(
    `${BASE_URL}/${details}/${id}?api_key=${KEY}&language=en-US`
  );
  return responce.data;
};

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

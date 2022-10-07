import { Link } from 'react-router-dom';

export const MovieItem = ({ items }) => {
  console.log(items);
  const list = items.map(({ id, title }) => {
    console.log(title);

    return (
      <li key={id}>
        <Link to={`movies/${id}`}>{title}</Link>
      </li>
    );
  });

  return <ul>{list}</ul>;
};

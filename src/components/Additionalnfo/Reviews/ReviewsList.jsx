export const ReviewsList = ({ data }) => {
  const result = data.map(({ id, author, content }) => {
    return (
      <li key={id}>
        <h3>Author: {author}</h3>
        <p>{content}</p>
      </li>
    );
  });
  return <ul>{result}</ul>;
};

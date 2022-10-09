import { Wrapper, SubTitle, Item, Info } from './ReviewsStyle';

export const ReviewsList = ({ data }) => {
  const result = data.map(({ id, author, content }) => {
    return (
      <Item key={id}>
        <SubTitle>Author: {author}</SubTitle>
        <p>{content}</p>
      </Item>
    );
  });
  return (
    <>
      {data.length !== 0 ? (
        <Wrapper>{result}</Wrapper>
      ) : (
        <Info>No reviews on this movie</Info>
      )}
    </>
  );
};

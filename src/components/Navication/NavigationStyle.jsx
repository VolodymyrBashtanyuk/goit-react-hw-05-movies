import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  padding: 20px;
  background-color: #e6cbcb;
  border-bottom: 1px solid black;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-right: 40px;
  }
  :hover {
    color: red;
  }
`;

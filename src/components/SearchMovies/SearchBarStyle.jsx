import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 400px;
  height: 30px;
  padding-left: 80px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  padding: 10px;
`;

export const Button = styled.button`
  position: absolute;
  top: 1px;
  right: 20px;
  border: transparent;
  background-color: transparent;
  cursor: pointer;
  :hover,
  :focus {
    background-color: #386997;
    color: #fff;
  }
`;

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
  color: #5e5a5a;
  border: transparent;
  background-color: transparent;
  cursor: pointer;
  :hover,
  :focus {
    color: #0a0a85;
    font-size: 30px;
    text-shadow: 1px 0px 1px #cccccc, 0px 1px 1px #eeeeee, 2px 1px 1px #cccccc,
      1px 2px 1px #eeeeee, 3px 2px 1px #cccccc, 2px 3px 1px #eeeeee,
      4px 3px 1px #cccccc, 3px 4px 1px #eeeeee, 5px 4px 1px #cccccc,
      4px 5px 1px #eeeeee, 6px 5px 1px #cccccc, 5px 6px 1px #eeeeee,
      7px 6px 1px #cccccc, 2px 2px 2px rgba(44, 23, 206, 0);
  }
`;

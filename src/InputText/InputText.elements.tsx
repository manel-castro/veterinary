import styled from 'styled-components';
import Theme from '../api/data/Theme';

export const InputWrapper = styled.div<{
  inputWidth: string;
  inputHeight: string;
}>`
  display: flex;
  flex-direction: column;
  width: ${({ inputWidth }) => inputWidth};
  height: ${({ inputHeight }) => inputHeight};
`;

export const InputTitle = styled.h3`
  color: black;
`;

export const Input = styled.input`
  color: black;
  padding: 10px 20px;
  margin: 5px 0 20px 0;
  font-size: 20px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

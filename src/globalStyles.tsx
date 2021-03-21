import styled, { createGlobalStyle } from 'styled-components';
import Theme from './api/data/Theme';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  white-space: nowrap;
  background: ${Theme.globalStyles.Button.BgColor};
  color: ${Theme.globalStyles.Button.TColor};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 15px 80px;

  &:hover {
    transition: all 0.3s ease-out;
    background: #4b59f7;
  }
`;

export default GlobalStyle;

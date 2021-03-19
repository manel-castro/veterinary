import styled from 'styled-components';
import { Container, Button } from '../../globalStyles';

export const HeaderContainer = styled.div`
  background: ${({ HeaderImg }: { HeaderImg: any }) => `url(${HeaderImg})`};
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: Calc(100vh - 90px);
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: -60px;
`;

export const TextWrapper = styled.div`
  margin: 20% 10%;
  width: 600px;
  position: sticky;
`;

export const Title = styled.h1`
  font-size: 72px;
  color: #000;
`;

import styled from 'styled-components';
import Theme from '../../api/data/Theme';
import { Container } from '../../globalStyles';

export const InfoContainer = styled(Container)`
  color: black;
  padding: 0 30px 30px 30px;
`;

// D9C3CE
export const InfoRow = styled.div`
  display: flex-;
  margin: -50px -50px 0px 0px;
  right: 0px;
  align-items: center;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0);
  width: 100%;
  height: 100%;
`;

export const InfoColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`;

export const TextWrapper = styled.div`
  width: 300px;
  heigth: 500px;
  text-align: left;
  padding: 30px 30px 60px 30px;
  box-shadow: 2px 5px 10px lightgrey;
  width: 100%;
  height: 100%;
`;

export const NameWrapper = styled.h3`
  color: black;
  font-size: 20px;
  margin-top: -15px;
  padding: 10px 0;
`;

export const RatingWrapper = styled.div`
  height: 10px;
  margin-bottom: -15px;
`;

export const ImgWrapper = styled.div`
  display: flex;
`;

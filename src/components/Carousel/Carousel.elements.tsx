import styled from 'styled-components';
import Theme from '../../api/data/Theme';
import { Container } from '../../globalStyles';

export const InfoContainer = styled(Container)`
  color: black;
  padding: 0 30px 30px 30px;
`;

// D9C3CE
export const InfoRow = styled.div`
  display: flex;
  margin: -3.75rem -3rem 0px 0px;
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
  padding: 30px 30px 70px 30px;
  box-shadow: 2px 5px 10px lightgrey;
  width: 100%;
  height: 100%;
`;

export const NameWrapper = styled.h3`
  color: black;
  font-size: 20px;
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: flex-end;
`;

export const RatingWrapper = styled.div`
  height: 10px;
  margin-top: -10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const ImgWrapper = styled.div`
  display: flex;
`;

// Stars rating
const starSize = '30px';
const starColor = '#fff';
const starBackground = '#fc0';

export const Stars = styled.div`
  display: inline-block;
  font-size: ${starSize};
  font-family: Times; /* make sure ★ appears correctly */
  line-height: 1;

  &::before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(
      90deg,
      ${starColor}
        ${({ rating }: { rating: number }) => `calc(${5 - rating} / 5 * 100%)`},
      ${starBackground}
        ${({ rating }: { rating: number }) => `calc(${5 - rating} / 5 * 100%)`}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

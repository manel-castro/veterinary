import styled from 'styled-components';
import Theme from '../../api/data/Theme';
import { Container, Button } from '../../globalStyles';

// height: calc(100vh-80px);
export const InfoContainer = styled(Container)`
  background: ${Theme.InfoSection.InfoContainer.BgColor.Light};
  padding: 100px 70px 270px;
  color: #fff;
`;

// D9C3CE
export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px 0px;
  flex-wrap: wrap;
  align-items: center;

  flex-direction: ${({ imgStart }: { imgStart: boolean }) =>
    imgStart ? 'row-reverse' : 'row'};
`;

export const InfoColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  flex: 1;
  flex-basis: 50%;

  flex-direction: column;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  flex: 1;
  flex-basis: 50%;
`;

export const TopLine = styled.div`
  font-size: 18px;
  color: ${Theme.InfoSection.TopLine.TColor};
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${Theme.InfoSection.Heading.TColor};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${Theme.InfoSection.SubTitle.TColor};
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 555px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const InfoButton = styled(Button)`
  font-size: 20px;

  &:hover {
    background: ${Theme.InfoSection.InfoButtonHover.BgColor};
    color: ${Theme.InfoSection.InfoButtonHover.TColor};
  }
`;

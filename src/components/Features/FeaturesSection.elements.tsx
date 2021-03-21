import styled from 'styled-components';
import Theme from '../../api/data/Theme';
import { Container, Button } from '../../globalStyles';

import Sections from '../../api/data/Data';

const features = Sections.features;

// height: calc(100vh-80px);

export const InfoContainer = styled(Container)`
  padding: 150px 70px;
  background: ${Theme.Features.FeaturesContainer.BgColor};
  transform: skewY(5deg);
`;

// D9C3CE
export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: space-around;
  justify-content: space-around;
  transform: skewY(-5deg);
`;

export const InfoColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  flex: 1;
  flex-basis: 25%;

  flex-direction: column;
`;

export const BadgeWrapper = styled.div`
  height: 350px;
  width: 300px;
  margin: 10px;
  padding: 20px;
  border: 10px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const BadgeIcon1 = styled(features.Badge1.Img)`
  color: white;
  font-size: 65px;
  height: 100%;
`;

export const BadgeIcon2 = styled(features.Badge2.Img)`
  color: white;
  font-size: 65px;
  height: 100%;
`;

export const BadgeIcon3 = styled(features.Badge3.Img)`
  color: white;
  font-size: 65px;
  height: 100%;
`;

export const BadgeIcon4 = styled(features.Badge4.Img)`
  color: white;
  font-size: 65px;
  height: 100%;
`;

export const TextWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

export const BadgeTitle = styled.h3`
  font-size: 32px;
  color: ${Theme.Features.BadgeText.TColor};
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 24px;
  text-align: center;
`;

export const BadgeText = styled.p`
  font-size: 22px;
  color: ${Theme.Features.BadgeText.TColor};
  line-height: 28px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  text-align: center;
`;

export const BadgeBorder = styled.div`
  background: white;
  height: 200px;
  width: 170px;
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
    background: ${Theme.InfoSection.InfoButton.BgColorHover};
    color: ${Theme.InfoSection.InfoButton.TColorHover};
  }
`;

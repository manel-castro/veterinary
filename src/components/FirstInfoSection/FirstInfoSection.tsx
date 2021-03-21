import React from 'react';
import {
  InfoColumn,
  TextWrapper,
  InfoContainer,
  InfoRow,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  InfoButton,
} from './FirstInfoSection.elements';

interface Section {
  TopLine: string;
  Heading: string;
  Subtitle: string;
  ButtonText: string;
  LatImg: any;
  imgStart: boolean;
}

function FirstInfoSection(section: Section) {
  return (
    <InfoContainer>
      <InfoRow imgStart={section.imgStart}>
        <InfoColumn>
          <TextWrapper>
            <TopLine>{section.TopLine}</TopLine>
            <Heading>{section.Heading}</Heading>
            <Subtitle>{section.Subtitle}</Subtitle>
            <InfoButton>{section.ButtonText}</InfoButton>
          </TextWrapper>
        </InfoColumn>
        <InfoColumn>
          <ImgWrapper>
            <Img src={section.LatImg} />
          </ImgWrapper>
        </InfoColumn>
      </InfoRow>
    </InfoContainer>
  );
}

export default FirstInfoSection;

import React from 'react';
import {
  InfoColumn,
  TextWrapper,
  InfoContainer,
  InfoRow,
  BadgeText,
  BadgeTitle,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  InfoButton,
  BadgeWrapper,
  BadgeIcon1,
  BadgeIcon2,
  BadgeIcon3,
  BadgeIcon4,
} from './FeaturesSection.elements';

interface Section {
  Badge1: { Title: string; Text: string };
  Badge2: { Title: string; Text: string };
  Badge3: { Title: string; Text: string };
  Badge4: { Title: string; Text: string };
}

function FeaturesSection(section: Section) {
  return (
    <InfoContainer>
      <InfoRow>
        <InfoColumn></InfoColumn>
      </InfoRow>
      <InfoRow>
        <InfoColumn>
          <BadgeWrapper>
            <BadgeIcon1 />
            <TextWrapper>
              <BadgeTitle>{section.Badge1.Title}</BadgeTitle>
              <BadgeText>{section.Badge1.Text}</BadgeText>
            </TextWrapper>
          </BadgeWrapper>
        </InfoColumn>
        <InfoColumn>
          <BadgeWrapper>
            <BadgeIcon2 />
            <TextWrapper>
              <BadgeTitle>{section.Badge2.Title}</BadgeTitle>
              <BadgeText>{section.Badge2.Text}</BadgeText>
            </TextWrapper>
          </BadgeWrapper>
        </InfoColumn>
        <InfoColumn>
          <BadgeWrapper>
            <BadgeIcon3 />
            <TextWrapper>
              <BadgeTitle>{section.Badge3.Title}</BadgeTitle>
              <BadgeText>{section.Badge3.Text}</BadgeText>
            </TextWrapper>
          </BadgeWrapper>
        </InfoColumn>
        <InfoColumn>
          <BadgeWrapper>
            <BadgeIcon4 />
            <TextWrapper>
              <BadgeTitle>{section.Badge4.Title}</BadgeTitle>
              <BadgeText>{section.Badge4.Text}</BadgeText>
            </TextWrapper>
          </BadgeWrapper>
        </InfoColumn>
      </InfoRow>
    </InfoContainer>
  );
}

export default FeaturesSection;

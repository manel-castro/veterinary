import React from 'react';
import {
  InfoColumn,
  TextWrapper,
  InfoContainer,
  InfoRow,
  BadgeText,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  InfoButton,
  BadgeWrapper,
} from './FeaturesSection.elements';

interface Section {
  BadgeText: string;
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
            <TextWrapper>
              <BadgeText>{section.BadgeText}</BadgeText>
            </TextWrapper>
          </BadgeWrapper>
        </InfoColumn>
        <InfoColumn>
          <BadgeWrapper>
            <TextWrapper>
              <BadgeText>{section.BadgeText}</BadgeText>
            </TextWrapper>
          </BadgeWrapper>
        </InfoColumn>
        <InfoColumn>
          <BadgeWrapper>
            <TextWrapper>
              <BadgeText>{section.BadgeText}</BadgeText>
            </TextWrapper>
          </BadgeWrapper>
        </InfoColumn>
        <InfoColumn>
          <BadgeWrapper>
            <TextWrapper>
              <BadgeText>{section.BadgeText}</BadgeText>
            </TextWrapper>
          </BadgeWrapper>
        </InfoColumn>
      </InfoRow>
    </InfoContainer>
  );
}

export default FeaturesSection;

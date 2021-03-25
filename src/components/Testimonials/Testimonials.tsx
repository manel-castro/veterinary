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
} from './Testimonials.elements';

import Carousel from '../Carousel/Carousel';

interface Section {
  TopLine: string;
  Heading: string;
  Subtitle: string;
  ButtonText: string;
  LatImg: any;
  imgStart: boolean;
}

function Testimonials(section: Section) {
  return (
    <InfoContainer>
      <InfoRow imgStart={section.imgStart}>
        <InfoColumn>
          <TextWrapper>
            <TopLine>{section.TopLine}</TopLine>
            <Heading>{section.Heading}</Heading>
          </TextWrapper>
        </InfoColumn>
        <InfoColumn>
          <Carousel />
        </InfoColumn>
      </InfoRow>
    </InfoContainer>
  );
}

export default Testimonials;

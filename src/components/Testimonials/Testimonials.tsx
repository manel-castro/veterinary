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

import Carousel, { CarouselItemsProps } from '../Carousel/Carousel';

interface Section {
  TopLine: string;
  Heading: string;
  carousel: CarouselItemsProps[];
}

function Testimonials(testimonials: Section) {
  return (
    <InfoContainer>
      <InfoRow>
        <InfoColumn>
          <TextWrapper>
            <TopLine>{testimonials.TopLine}</TopLine>
            <Heading>{testimonials.Heading}</Heading>
          </TextWrapper>
        </InfoColumn>
        <InfoColumn>
          <Carousel carousel={testimonials.carousel} />
        </InfoColumn>
      </InfoRow>
    </InfoContainer>
  );
}

export default Testimonials;

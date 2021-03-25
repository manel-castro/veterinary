import React, { useState, useEffect, memo } from 'react';
import './Carousel.css';
import {
  InfoContainer,
  InfoRow,
  InfoColumn,
  TextWrapper,
  ImgWrapper,
  NameWrapper,
  RatingWrapper,
  Stars,
} from './Carousel.elements';

// Comment:
// this version of carousel is OK for computer, and very easily correct for mobile, but could be optimal TODO:
// 1. Mouseover events
// 2. Touch controls for mobile (finger movement)
// sometimes it brokes (idk why)

export interface CarouselItemProps {
  rating: number;
  opinion: string;
  name: string;
  image: any;
  opinionLink?: string;
}

export interface CarouselItemsProps {
  player: CarouselItemProps;
}

const CarouselItem = ({ rating, opinion, name, image }: CarouselItemProps) => {
  return (
    <InfoContainer>
      <InfoColumn>
        <TextWrapper>
          <div>{opinion}</div>
        </TextWrapper>
        <InfoRow>
          <InfoColumn>
            <RatingWrapper>
              <Stars rating={rating} />
            </RatingWrapper>
            <NameWrapper>
              <div>{name}</div>
            </NameWrapper>
          </InfoColumn>
          <ImgWrapper>
            <img src={image}></img>
          </ImgWrapper>
        </InfoRow>
      </InfoColumn>
    </InfoContainer>
  );
};

interface CarouselProps {
  carousel: CarouselItemsProps[];
}

const Carousel = (Props: CarouselProps) => {
  const { carousel } = Props;
  useEffect(() => {
    // setInterval(changeOrder, 4000);
  });

  function changeOrder() {
    const allSlides = document.querySelectorAll('.single-slide');
    const refPoint = '1';
    const slidesLength = allSlides.length;

    for (const slide of allSlides) {
      const orderStr = slide.getAttribute('data-order')!;

      const order = parseInt(orderStr!);

      console.log('orderItem: ', order);
      if (order < slidesLength) {
        slide.setAttribute('data-order', `${order + 1}`);
      } else {
        slide.setAttribute('data-order', `${1}`);
      }
    }
  }

  return (
    <div className="all-slides">
      <div className="single-slide" data-order="1">
        <CarouselItem
          rating={carousel[0].player.rating!}
          opinion={carousel[0].player.opinion}
          name={carousel[0].player.name}
          image={carousel[0].player.image}
        />
      </div>
      <div className="single-slide" data-order="2">
        <CarouselItem
          rating={carousel[1].player.rating!}
          opinion={carousel[1].player.opinion}
          name={carousel[1].player.name}
          image={carousel[1].player.image}
        />{' '}
      </div>
      <div className="single-slide" data-order="3">
        <CarouselItem
          rating={carousel[0].player.rating!}
          opinion={carousel[0].player.opinion}
          name={carousel[0].player.name}
          image={carousel[0].player.image}
        />{' '}
      </div>
      <div className="single-slide" data-order="4">
        <CarouselItem
          rating={carousel[0].player.rating!}
          opinion={carousel[0].player.opinion}
          name={carousel[0].player.name}
          image={carousel[0].player.image}
        />{' '}
      </div>
      <div className="single-slide" data-order="5">
        <CarouselItem
          rating={carousel[0].player.rating!}
          opinion={carousel[0].player.opinion}
          name={carousel[0].player.name}
          image={carousel[0].player.image}
        />{' '}
      </div>
    </div>
  );
};

export default Carousel;

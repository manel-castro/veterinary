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
import ratingImg1 from '../../media/señor.png';
import ratingImg2 from '../../media/alba.png';

// Comment:
// this version of carousel is OK for computer, and very easily correct for mobile, but could be optimal TODO:
// 1. Mouseover events
// 2. Touch controls for mobile (finger movement)
// sometimes it brokes (idk why)

const _items = [
  {
    player: {
      name: 'Cesar Vidal',
      image: ratingImg1,
      rating: 5,
      opinion:
        'Muy buenos Veterinarios, cuidando mucho a las mascotas, todo muy bien explicado y muy atentos. Esterilizaron a mi gatita y todo perfecto, operación, chip, campana, las curas y medicamentos tal y como dijeron en un principio, siempre muy bien explicado y claro. Además de buenos y económicos tienen mucho cuidado con los animales, no soy de Barcelona, pero vale la pena hacer unos kilómetros por la atención y profesionalidad que tienen. Sin duda los mejores !!!',
      opinionLink: 'https://goo.gl/maps/bsvpirMac4uJhJcV7',
    },
  },
  {
    player: {
      name: 'Cesar Vidal',
      image: ratingImg2,
      rating: 5,
      opinion:
        'Muy buenos Veterinarios, cuidando mucho a las mascotas, todo muy bien explicado y muy atentos. Esterilizaron a mi gatita y todo perfecto, operación, chip, campana, las curas y medicamentos tal y como dijeron en un principio, siempre muy bien explicado y claro. Además de buenos y económicos tienen mucho cuidado con los animales, no soy de Barcelona, pero vale la pena hacer unos kilómetros por la atención y profesionalidad que tienen. Sin duda los mejores !!!',
      opinionLink: 'https://goo.gl/maps/bsvpirMac4uJhJcV7',
    },
  },
  {
    player: {
      name: 'Cesar Vidal',
      image: ratingImg1,
      rating: 5,
      opinion:
        'Muy buenos Veterinarios, cuidando mucho a las mascotas, todo muy bien explicado y muy atentos. Esterilizaron a mi gatita y todo perfecto, operación, chip, campana, las curas y medicamentos tal y como dijeron en un principio, siempre muy bien explicado y claro. Además de buenos y económicos tienen mucho cuidado con los animales, no soy de Barcelona, pero vale la pena hacer unos kilómetros por la atención y profesionalidad que tienen. Sin duda los mejores !!!',
      opinionLink: 'https://goo.gl/maps/bsvpirMac4uJhJcV7',
    },
  },
  {
    player: {
      name: 'Cesar Vidal',
      image: ratingImg1,
      rating: 5,
      opinion:
        'Muy buenos Veterinarios, cuidando mucho a las mascotas, todo muy bien explicado y muy atentos. Esterilizaron a mi gatita y todo perfecto, operación, chip, campana, las curas y medicamentos tal y como dijeron en un principio, siempre muy bien explicado y claro. Además de buenos y económicos tienen mucho cuidado con los animales, no soy de Barcelona, pero vale la pena hacer unos kilómetros por la atención y profesionalidad que tienen. Sin duda los mejores !!!',
      opinionLink: 'https://goo.gl/maps/bsvpirMac4uJhJcV7',
    },
  },
  {
    player: {
      name: 'Cesar Vidal',
      image: ratingImg1,
      rating: 5,
      opinion:
        'Muy buenos Veterinarios, cuidando mucho a las mascotas, todo muy bien explicado y muy atentos. Esterilizaron a mi gatita y todo perfecto, operación, chip, campana, las curas y medicamentos tal y como dijeron en un principio, siempre muy bien explicado y claro. Además de buenos y económicos tienen mucho cuidado con los animales, no soy de Barcelona, pero vale la pena hacer unos kilómetros por la atención y profesionalidad que tienen. Sin duda los mejores !!!',
      opinionLink: 'https://goo.gl/maps/bsvpirMac4uJhJcV7',
    },
  },
];

interface CarouselItemProps {
  rating: number;
  opinion: string;
  name: string;
  image: any;
  opinionLink?: string;
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

const Carousel = () => {
  useEffect(() => {
    setInterval(changeOrder, 4000);
  });
  const [items, setItems] = useState(_items);

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
          rating={_items[0].player.rating!}
          opinion={_items[0].player.opinion}
          name={_items[0].player.name}
          image={_items[0].player.image}
        />
      </div>
      <div className="single-slide" data-order="2">
        <CarouselItem
          rating={_items[1].player.rating!}
          opinion={_items[1].player.opinion}
          name={_items[1].player.name}
          image={_items[1].player.image}
        />{' '}
      </div>
      <div className="single-slide" data-order="3">
        <CarouselItem
          rating={_items[0].player.rating!}
          opinion={_items[0].player.opinion}
          name={_items[0].player.name}
          image={_items[0].player.image}
        />{' '}
      </div>
      <div className="single-slide" data-order="4">
        <CarouselItem
          rating={_items[0].player.rating!}
          opinion={_items[0].player.opinion}
          name={_items[0].player.name}
          image={_items[0].player.image}
        />{' '}
      </div>
      <div className="single-slide" data-order="5">
        <CarouselItem
          rating={_items[0].player.rating!}
          opinion={_items[0].player.opinion}
          name={_items[0].player.name}
          image={_items[0].player.image}
        />{' '}
      </div>
    </div>
  );
};

export default Carousel;

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
} from './Carousel.elements';
import ratingImg1 from '../../media/señor.png';

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
    },
  },
  {
    player: {
      title: "2 Ronnie O'Sullivan",
      desc:
        "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
      image: 'https://i.postimg.cc/qBGQNc37/ro-slider.jpg',
    },
  },
  {
    player: {
      title: '3 Shane Van Boening',
      desc:
        'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
      image: 'https://i.postimg.cc/cHdMJQKG/svb-slider.jpg',
    },
  },
  {
    player: {
      title: '4 Mike Sigel',
      desc:
        'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
      image: 'https://i.postimg.cc/C12h7nZn/ms-1.jpg',
    },
  },
  {
    player: {
      title: '5 Willie Mosconi',
      desc:
        'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
      image: 'https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg',
    },
  },
];

const CarouselItem = () => {
  return (
    <InfoContainer>
      <InfoColumn>
        <TextWrapper>
          <div>{_items[0].player.opinion}</div>
        </TextWrapper>
        <InfoRow>
          <InfoColumn>
            <NameWrapper>
              <div>{_items[0].player.name}</div>
            </NameWrapper>
            <RatingWrapper>
              <div>{_items[0].player.rating}</div>
            </RatingWrapper>
          </InfoColumn>
          <ImgWrapper>
            <img src={_items[0].player.image}></img>
          </ImgWrapper>
        </InfoRow>
      </InfoColumn>
    </InfoContainer>
  );
};

const Carousel = () => {
  useEffect(() => {
    // setInterval(changeOrder, 4000);
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
        <CarouselItem />
      </div>
      <div className="single-slide" data-order="2">
        <CarouselItem />
      </div>
      <div className="single-slide" data-order="3">
        <CarouselItem />
      </div>
      <div className="single-slide" data-order="4">
        <CarouselItem />
      </div>
      <div className="single-slide" data-order="5">
        <CarouselItem />
      </div>
    </div>
  );
};

export default Carousel;

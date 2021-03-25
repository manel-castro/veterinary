import latImg1 from '../../media/cat-lying.jpg';
import latImg2 from '../../media/Man.svg';

import headerImg from '../../media/header.jpeg';
import { FaHospitalAlt, FaHeart, FaEarlybirds, FaCar } from 'react-icons/fa';

import ratingImg1 from '../../media/señor.png';
import ratingImg2 from '../../media/alba.png';

const Sections = {
  header: {
    HeaderImg: headerImg,
  },
  features: {
    Badge1: {
      Title: 'Familiar',
      Text: 'Para que tanto tú como tu mascota os sintáis cómodos',
      Img: FaHeart,
    },
    Badge2: {
      Title: 'Especialistas',
      Text: 'Ofrecemos los mejores resultados',
      Img: FaEarlybirds,
    },
    Badge3: {
      Title: '24H',
      Text: 'Para que tanto tú como tu mascota os sintáis cómodos',
      Img: FaHospitalAlt,
    },
    Badge4: {
      Title: 'Parking',
      Text: 'Contamos con parking gratuito para nuestros clientes',
      Img: FaCar,
    },
  },
  testimonials: {
    Heading: 'Por algo les encantamos',
    TopLine: '',
    carousel: [
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
    ],
  },
  section1: {
    // Content
    TopLine: 'Veterinarios calificados',
    Heading: 'Nos tomamos la salud de tu mascota en serio',
    Subtitle:
      'Más de 15 años de experiencia en el sector. Contamos con los mejores especialistas, con una sincera vocación por la profesión. Todo junto nos ha llevado a ofrecer los mejores resultados.',
    LatImg: latImg1,
    ButtonText: 'Sobre nosotros',

    //Style
    imgStart: false,
    themeColor: 'light',
  },
  section2: {
    // Content
    //Todo: carrosuel with testimonials instead of image. Get them on google maps
    TopLine: 'Profesionales con vocación',
    Heading: 'Estará en las mejores manos',
    Subtitle:
      'Cientos de personas han confiando sus mascotas en nosotros, hacemos un trato individualizado de cada animal. Los testimonios de nuestros clientes nos avalan.',
    LatImg: latImg2,
    ButtonText: 'Enviar',

    //Style
    imgStart: true,
    themeColor: 'light',
  },
  contact: {
    // Content
    TopLine: 'Atención y servicio 24h',
    Heading: 'Contacte con nosotros',
    Subtitle: '',
    LatImg: latImg1,
    ButtonText: 'Enviar',

    //Style
    imgStart: false,
    themeColor: 'dark',
  },
};

export default Sections;

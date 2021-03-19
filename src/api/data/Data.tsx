import latImg1 from '../../media/Man.svg';
import headerImg from '../../media/header.jpeg';

const Sections = {
  header: {
    HeaderImg: headerImg,
  },
  features: {
    BadgeText: 'something',
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
    LatImg: latImg1,
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

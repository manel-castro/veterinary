const colors = {
  lightYellow: '#FFF9ED',
  lighterYellow: '#FFFCF7',
  lightAqua: '#F6FEFB',
  darkBlue: '#101522',
  orange: '#EBA769',
  lightOrange: '#EECFB3',
  darkOrange: '#6B4D30',
  topLineBlue: '#4b59f7',
};

const Theme = {
  Nav: {
    Color: {
      Links: 'black',
      HoverLinks: '#4b59f7',
      NavBackground: 'white',
    },
  },
  Features: {
    FeaturesContainer: {
      BgColor: colors.orange,
    },
    BadgeText: {
      TColor: colors.darkOrange,
    },
  },
  InfoSection: {
    InfoContainer: {
      BgColor: {
        Dark: '#101522',
        Light: 'white',
      },
    },
    TopLine: {
      TColor: 'white',
    },
    Heading: {
      TColor: '#1c2237',
    },
    SubTitle: {
      TColor: '#1c2237',
    },
    InfoButtonHover: {
      BgColor: '#4b59f7',
      TColor: 'white',
    },
  },
};

export default Theme;

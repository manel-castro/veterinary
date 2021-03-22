const colors = {
  lightYellow: '#FFF9ED',
  lighterYellow: '#FFFCF7',
  lightAqua: '#F6FEFB',
  darkBlue: '#101522',
  orange: '#EBA769',
  lightOrange: '#EECFB3',
  darkOrange: '#D1965E',
  brown: '#6B4D30',
  topLineBlue: '#4b59f7',
};

const Theme = {
  Nav: {
    Color: {
      Links: 'black',
      HoverLinks: colors.orange,
      NavBackground: 'white',
    },
  },
  Features: {
    FeaturesContainer: {
      BgColor: colors.orange,
    },
    BadgeText: {
      TColor: 'white',
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
    InfoButton: {
      BgColorHover: colors.darkOrange,
      TColorHover: 'white',
    },
  },
  globalStyles: {
    Button: {
      BgColor: colors.orange,
      TColor: 'white',
    },
  },
};

export default Theme;

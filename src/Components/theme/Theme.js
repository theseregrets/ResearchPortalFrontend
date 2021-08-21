import { createTheme } from '@material-ui/core/styles';

export const colors = {
  primary: '#5b75ca',
  secomdary: '#ffb01690',
  textLight: 'white',
  textDark: 'black',
  navBg: '#68c0f7',
  navText: '#ffffff',
  navTextHover: 'rgba(255, 255, 255, 0.2)',
  homepageHeading: '#0b5b99',
  headingLight: 'white',
  headingDark: 'black',
  projectHeading: '#1414b0',
  cardFaculty: '#606060', // project card faculty name
  msgBg: '#fefefe', // main dashboard
  drawerBg: 'white', // dashboard
  bgLight: 'rgba(255, 255, 255, 0.9)',
  teamIcon: '#4499fe', // team page social icons
  accordSumBg: 'rgba(217, 243, 247, 0.05)', // project page accordion summary bg
  footerBg: 'primary',

  shadows: {
    msg: 4, // main dashboard
    profile: 4,
    projectCard: 4,
    researchStatement: 4,
    createProject: 4,
  },

  gradients: {
    contactCard: 'linear-gradient(to top right , white 20%, whitesmoke)', // About us contact card
    homepageCardBg: 'linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)',
    homepageCardNumBg: 'linear-gradient(315deg, #ffffff 0%, #d7e1ec 100%)',
  },
};

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Lato',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Lato',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Lato',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Lato',
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Lato',
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'Lato',
      fontWeight: 700,
    },
    p: {
      fontFamily: 'Quicksand',
      fontWeight: 700,
    },
  },
});

export default theme;

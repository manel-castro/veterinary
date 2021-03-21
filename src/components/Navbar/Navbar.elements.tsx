import styled from 'styled-components';
import Theme from '../../api/data/Theme';
import { Container, Button } from '../../globalStyles';
// import { FaWpexplorer } from 'react-icons/fa';
import LogoImg from '../../media/logo.png';
import { scrollAdapter } from '../../_helpers/genericUtils';

const scrollRange = [200, 500];

export const Nav = styled.nav`
  height: 110px;
  display: flex;
  position: sticky;
  top: 0px;
  justify-content: center;
  align-content: center;
  z-index: 10;
`;

export const NavbarContainer = styled(Container)<{ big: string }>`
  display: flex;
  justify-content: space-between;
  height: ${({ big }) => (big ? '250px' : '80px')};
  background: ${Theme.Nav.Color.NavBackground};
`;

// export const NavLogo = styled();

export const NavRight = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  text-align: center;
`;

export const NavbarButton = styled(Button)<{ big: string }>`
  background: '#4B59F7';
  font-size: ${({ big }) => (big ? '34px' : '16px')};

  &:hover {
    background: '#0467FB';
  }
  @media screen and (max-width: 960px) {
    font-size: 20px;
  }
`;

export const NavItem = styled.li<{ big: string }>`
  height: ${({ big }) => (big ? '200px' : '80px')};
  border-bottom: ${({ big }) =>
    big ? '' : `2px solid ${Theme.Nav.Color.NavBackground}`};

  &:hover {
    border-bottom: ${({ big }) =>
      big ? '' : ` 2px solid ${Theme.Nav.Color.HoverLinks}`};
  }
`;

export const Link = styled.div<{ big: string }>`
  color: ${Theme.Nav.Color.Links};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: ${({ big }) => (big ? '1rem 2rem' : '0.5rem 1rem')};
  height: 100%;
  cursor: pointer;
  font-size: ${({ big }) => (big ? '25px' : '18')};

  &:hover {
    color: ${Theme.Nav.Color.HoverLinks};
    transition: all 0.3 ease;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-width: 
  padding-left: 10px;

`;

export const Title = styled.h2<{ big: string }>`
  font-size: ${({ big }) => (big ? '60px' : '30px')};
  color: black;
`;

export const LogoContainer = styled.div<{ big: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ big }) => (big ? '250px' : '80px')};
  width: ${({ big }) => (big ? '250px' : '80px')};
`;

export const Logo = styled.div<{ big: string; scrollLevel: number }>`
  background-image: url(${LogoImg});
  background-size: cover;
  background-position: center;
  height: ${({ scrollLevel }) =>
    scrollAdapter(scrollLevel, scrollRange, [60, 185])}px;

  width: ${({ scrollLevel }) =>
    scrollAdapter(scrollLevel, scrollRange, [60, 185])}px;
  transition: all 120ms linear;
`;

export const ImportantTextWrapper = styled.div`
  margin: 20px 0 0 20px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid grey;
  border-radius: 10px;
  background: white;
`;

export const ImportantText = styled.p`
  color: red;
  font-size: 50px;
`;

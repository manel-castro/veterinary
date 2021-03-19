import styled from 'styled-components';
import Theme from '../../api/data/Theme';
import { Container, Button } from '../../globalStyles';
// import { FaWpexplorer } from 'react-icons/fa';
import LogoImg from '../../media/logo.png';

export const Nav = styled.nav`
  height: 110px;
  display: flex;
  position: sticky;
  top: 0px;
  justify-content: center;
  align-content: center;
  z-index: 10;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
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

export const NavbarButton = styled(Button)`
  background: '#4B59F7';
  font-size: 16px;

  &:hover {
    background: '#0467FB';
  }
  @media screen and (max-width: 960px) {
    font-size: 20px;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid ${Theme.Nav.Color.NavBackground};

  &:hover {
    border-bottom: 2px solid ${Theme.Nav.Color.HoverLinks};
  }
`;

export const Link = styled.div`
  color: ${Theme.Nav.Color.Links};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: ${Theme.Nav.Color.HoverLinks};
    transition: all 0.3 ease;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
`;

export const Logo = styled.div`
  background-image: url(${LogoImg});
  background-size: cover;
  background-position: center;
  height: 60px;
  width: 60px;
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

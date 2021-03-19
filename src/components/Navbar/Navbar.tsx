import React from 'react';
import {
  Nav,
  NavbarContainer,
  NavItem,
  Link,
  NavMenu,
  Logo,
  LogoContainer,
  NavRight,
  ImportantTextWrapper,
  ImportantText,
} from './Navbar.elements';

function Navbar() {
  return (
    <Nav>
      <NavbarContainer>
        <LogoContainer>
          <Logo></Logo>
        </LogoContainer>
        <NavRight>
          <NavMenu>
            <NavItem>
              <Link>Home</Link>
            </NavItem>
            <NavItem>
              <Link>About</Link>
            </NavItem>
            <NavItem>
              <Link>Contact</Link>
            </NavItem>
          </NavMenu>
          <ImportantTextWrapper>
            <ImportantText>Urgencias 24h</ImportantText>
          </ImportantTextWrapper>
        </NavRight>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;

import React, { useState, useEffect } from 'react';
import { throttle } from '../../_helpers/genericUtils';
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
  TitleContainer,
  Title,
} from './Navbar.elements';

const Navbar = () => {
  const [big, setBig] = useState('big');
  const [scrollLevel, setScrollLevel] = useState(0);
  const TARGET_OFFSET = 400;

  useEffect(() => {
    const actionToDo = () => {
      if (window.pageYOffset > TARGET_OFFSET) {
        setBig('');
      } else {
        setBig('big');
      }
      // setScrollLevel(window.pageYOffset);
      // console.log(scrollLevel);
    };

    const handleNav = () => {
      throttle(200, actionToDo);
    };

    document.addEventListener('scroll', () => handleNav());

    // dettacth EventListener when certain pageYOffset is reached
    // and attach again when is up to the same level
  });

  return (
    <Nav>
      <NavbarContainer big={big}>
        <LogoContainer big={big}>
          <Logo big={big} scrollLevel={scrollLevel} />
        </LogoContainer>
        <TitleContainer>
          <Title big={big}>Veterinari</Title>
          <Title big={big}>l'Arc de l'Eixample</Title>
        </TitleContainer>
        <NavRight>
          <NavMenu>
            <NavItem big={big}>
              <Link big={big}>Home</Link>
            </NavItem>
            <NavItem big={big}>
              <Link big={big}>About</Link>
            </NavItem>
            <NavItem big={big}>
              <Link big={big}>Contact</Link>
            </NavItem>
          </NavMenu>
          {/* <ImportantTextWrapper>
            <ImportantText>Urgencias 24h</ImportantText>
          </ImportantTextWrapper> */}
        </NavRight>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;

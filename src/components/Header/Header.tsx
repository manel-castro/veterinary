import React from 'react';
import { Title } from './Header.elements';
import { TextWrapper } from './Header.elements';
import { HeaderContainer } from './Header.elements';

interface Section {
  HeaderImg: any;
}

export default function Header(section: Section) {
  return (
    <HeaderContainer HeaderImg={section.HeaderImg}>
      <TextWrapper>
        <Title></Title>
      </TextWrapper>
    </HeaderContainer>
  );
}

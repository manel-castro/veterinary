import React from 'react';
import ContactForm from './ContactForm/ContactForm';

import {
  InfoColumn,
  TextWrapper,
  InfoContainer,
  InfoRow,
  TopLine,
  Heading,
  Subtitle,
  SubHeading,
  MediaWrapper,
} from './ContactSection.elements';
import { stringify } from 'querystring';

interface Section {
  TopLine: string;
  Heading: string;
  Subtitle: string;
  ButtonText: string;
  LatImg: any;
  imgStart: boolean;
}

const ContactSection = (section: Section) => {
  return (
    <InfoContainer>
      <InfoRow>
        <InfoColumn>
          <TextWrapper>
            <Heading>{section.Heading}</Heading>
            <TopLine>{section.TopLine}</TopLine>
            <Subtitle>{section.Subtitle}</Subtitle>
          </TextWrapper>
        </InfoColumn>
      </InfoRow>
      <InfoRow>
        <InfoColumn>
          <SubHeading>Envianos un mensaje</SubHeading>
          <MediaWrapper>
            <ContactForm />
          </MediaWrapper>
        </InfoColumn>
        <InfoColumn>
          <SubHeading>¡Aquí estamos!</SubHeading>

          <MediaWrapper>
            {/* eslint-disable-next-line */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.40433800363!2d2.1570092153675877!3d41.38702460398068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a28ebca814fd%3A0x5008621df7b44e59!2sL&#39;Arc%20del%20L&#39;eixample%20veterinari!5e0!3m2!1sen!2ses!4v1616153374859!5m2!1sen!2ses"
              width="600"
              height="450"
              loading="lazy"
              frameBorder="0"
            ></iframe>
          </MediaWrapper>
        </InfoColumn>
      </InfoRow>
    </InfoContainer>
  );
};

export default ContactSection;

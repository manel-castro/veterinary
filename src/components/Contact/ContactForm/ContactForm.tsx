import React, { useState } from 'react';
import {
  validateEmail,
  validateTel,
  validateNombre,
} from '../../../_helpers/validateEmail';

import {
  InfoColumn,
  TextWrapper,
  InfoContainer,
  InfoRow,
  InputText,
  InputTextTitle,
  InputErrorMessage,
  InputErrorWrapper,
  ContactButton,
  ContactFormWrapper,
  ContactInputBig,
  InputWrapper,
} from './ContactForm.elements';
import { stringify } from 'querystring';

// interface Section {
//   TopLine: string;
//   Heading: string;
//   Subtitle: string;
//   ButtonText: string;
//   LatImg: any;
//   imgStart: boolean;
// }

const ContactForm = () => {
  const [userInput, setUserInput] = useState<{
    email: string;
    tel: string;
    nombre: string;
  }>({
    email: '',
    tel: '',
    nombre: '',
  });
  const [userInputErrors, setUserInputErrors] = useState<{
    email: string;
    tel: string;
    nombre: string;
  }>({
    email: '',
    tel: '',
    nombre: '',
  });

  const checkErrors = (inputName: string, inputValue: string) =>
    setUserInputErrors((prev) => ({
      ...prev,
      [inputName]:
        inputName === 'email'
          ? validateEmail(inputValue)
          : inputName === 'tel'
          ? validateTel(inputValue)
          : validateNombre(inputValue),
    }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    checkErrors(e.target.name, e.target.value);
  };

  return (
    <InfoContainer>
      <InfoRow>
        <InfoColumn>
          <ContactFormWrapper>
            <InputWrapper>
              <InputTextTitle>Nombre:</InputTextTitle>
              <InputText
                id="asdf0"
                name="nombre"
                type="text"
                onChange={handleChange}
                value={userInput.nombre}
              />
              <InputErrorWrapper>
                {userInputErrors.nombre.length !== 0 ? (
                  <InputErrorMessage>
                    {userInputErrors.nombre}
                  </InputErrorMessage>
                ) : null}
              </InputErrorWrapper>
            </InputWrapper>
            <InputWrapper>
              <InputTextTitle>Email:</InputTextTitle>
              <InputText
                id="asdf1"
                name="email"
                type="text"
                onChange={handleChange}
                value={userInput.email}
              />
              <InputErrorWrapper>
                {userInputErrors.email.length !== 0 ? (
                  <InputErrorMessage>{userInputErrors.email}</InputErrorMessage>
                ) : null}
              </InputErrorWrapper>
            </InputWrapper>
            <InputWrapper>
              <InputTextTitle>Teléfono:</InputTextTitle>
              <InputText
                id="asdf2"
                name="tel"
                type="text"
                onChange={handleChange}
                value={userInput.tel}
              />
              <InputErrorWrapper>
                {userInputErrors.tel.length !== 0 ? (
                  <InputErrorMessage>{userInputErrors.tel}</InputErrorMessage>
                ) : null}
              </InputErrorWrapper>
            </InputWrapper>
            <InputWrapper>
              <InputTextTitle>Asunto:</InputTextTitle>
              <ContactInputBig value="x" />
            </InputWrapper>
            <ContactButton>Enviar</ContactButton>
          </ContactFormWrapper>
        </InfoColumn>
      </InfoRow>
    </InfoContainer>
  );
};

export default ContactForm;

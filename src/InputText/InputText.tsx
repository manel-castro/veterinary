import React, { useState } from 'react';
import { Input, InputTitle, InputWrapper } from './InputText.elements';
import ErrorsCheck from './ErrorsCheck';

interface TextType {
  id: string;
  name: string;
  contactText: string;
  type?: 'email' | 'tel' | 'other';
  inputHeight: string;
  inputWidth: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const InputText = ({
  id,
  name,
  handleChange,
  value,
  contactText,
  type,
  inputHeight,
  inputWidth,
}: TextType) => {
  const [text, setText] = useState<string>('');
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log('something');

  //   setText({ value: e.target.value });
  //   // ErrorsCheck(e.target.value);
  // };

  return (
    <InputWrapper inputHeight={''} inputWidth="300px">
      <InputTitle>{contactText}</InputTitle>
      <Input id={id} name={name} onChange={handleChange} />
      {/* <Errors /> */}
    </InputWrapper>
  );
};

export default InputText;

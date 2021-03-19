import styled from 'styled-components';
import Theme from '../../../api/data/Theme';
import { Container, Button } from '../../../globalStyles';

// height: calc(100vh-80px);
export const InfoContainer = styled(Container)`
  background: ${Theme.InfoSection.InfoContainer.BgColor.Light};
  color: #fff;
`;

// D9C3CE
export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const InfoColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  flex: 1;
  flex-basis: 50%;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  flex: 1;
  flex-basis: 50%;
`;

export const TopLine = styled.div`
  font-size: 24px;
  color: ${Theme.InfoSection.TopLine.TColor};
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 16px;
  font-size: 48px;
  line-height: 1.1;
  color: ${Theme.InfoSection.Heading.TColor};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${Theme.InfoSection.SubTitle.TColor};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 17px 0;
`;

export const InputTextTitle = styled.h3`
  color: black;
`;

export const InputText = styled.input`
  color: black;
  padding: 10px 20px;
  margin: 5px 0 5px 0;
  font-size: 20px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const InputErrorWrapper = styled.div`
  height: 11px;
  width: 100%;
`;

export const InputErrorMessage = styled.p`
  color: red;
  size: 11px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 555px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContactInputBig = styled.textarea`
  color: black;
  padding: 10px 20px;
  margin: 5px 0 20px 0;
  font-size: 20px;
  height: 150px;
  width: 100%;
  box-sizing: border-box;
  resize: none;
`;

export const ContactButton = styled(Button)`
  font-size: 20px;
  margin-top: 10px;

  &:hover {
    background: ${Theme.InfoSection.InfoButtonHover.BgColor};
    color: ${Theme.InfoSection.InfoButtonHover.TColor};
  }
`;

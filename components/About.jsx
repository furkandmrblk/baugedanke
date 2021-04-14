import React from 'react';
import {
  AboutBackground,
  AboutContainer,
  AboutImage,
  AboutText,
  AboutTextDiv,
  AboutTitle,
} from './About.styled';

export const About = (props) => {
  const data = props.props[0].fields;

  return (
    <AboutContainer id="uberuns">
      <AboutBackground />
      <AboutTextDiv>
        <AboutTitle>{data.aboutTitle}</AboutTitle>
        <AboutText>{data.aboutText}</AboutText>
      </AboutTextDiv>
      <AboutImage
        style={{
          backgroundImage: `url('https:${data.aboutImage.fields.file.url}')`,
        }}
      />
    </AboutContainer>
  );
};

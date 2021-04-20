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
  const data = props.props.fields;

  return (
    <AboutContainer id="uberuns">
      <AboutBackground />
      <AboutTextDiv>
        <AboutTitle>{data.berUnsTitel}</AboutTitle>
        <AboutText>{data.berUnsText}</AboutText>
      </AboutTextDiv>
      <AboutImage
        style={{
          backgroundImage: `url('https:${data.berUnsBild.fields.file.url}')`,
        }}
      />
    </AboutContainer>
  );
};

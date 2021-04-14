import React from 'react';
import { HeroContainer, HeroImage, HeroTitle } from './Hero.styled';

export const Hero = (props) => {
  const data = props.props[0].fields;

  return (
    <HeroContainer>
      <HeroTitle>{data.heroTitle}</HeroTitle>
      <HeroImage
        style={{
          backgroundImage: `url('https:${data.heroImage.fields.file.url}')`,
        }}
      />
    </HeroContainer>
  );
};

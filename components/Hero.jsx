import React from 'react';
import { HeroContainer, HeroImage, HeroTitle } from './Hero.styled';

export const Hero = (props) => {
  const data = props.props.fields;

  return (
    <HeroContainer>
      <HeroTitle>{data.heroTitel}</HeroTitle>
      <HeroImage
        style={{
          backgroundImage: `url('https:${data.heroBild.fields.file.url}')`,
        }}
      />
    </HeroContainer>
  );
};

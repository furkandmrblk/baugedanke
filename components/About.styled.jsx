import styled from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// About Container
export const AboutContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 11.25rem 0rem 0rem 0rem;

  @media (max-width: ${media.laptopS}) {
    flex-direction: column;
  }
  @media (max-width: ${media.between}) {
    margin: 5.25rem 0rem 0rem 0rem;
  }
`;

// About Background
export const AboutBackground = styled.div`
  z-index: -1;
  position: absolute;

  bottom: 0;
  right: 0;

  height: 34.8125rem;
  width: 43.125rem;

  margin-bottom: -3.5rem;

  @media (max-width: ${media.laptopL}) {
    height: 27.8125rem;
    width: 36.125rem;
  }
  @media (max-width: ${media.laptopM}) {
    height: 24.3125rem;
    width: 32.625rem;
  }
  @media (max-width: ${media.laptopS}) {
    height: 21rem;
    margin-bottom: -2rem;
  }
  @media (max-width: ${media.tablet}) {
    height: 17rem;
    width: 28rem;
    margin-bottom: -1.5rem;
  }
  @media (max-width: ${media.between}) {
    height: 13.5rem;
    width: 24rem;
    margin-bottom: -1.25rem;
  }
  @media (max-width: ${media.mobileL}) {
    height: 11.5rem;
    width: 19rem;
  }
  @media (max-width: ${media.mobileM}) {
    width: 19.5rem;
  }
`;

// About Title
export const AboutTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-right: 5.8125rem;

  @media (max-width: ${media.laptopL}) {
    margin-right: 2.8125rem;
  }
  @media (max-width: ${media.laptopS}) {
    margin-right: 13.75rem;
  }
  @media (max-width: ${media.tablet}) {
    margin-right: 4rem;
  }
  @media (max-width: ${media.between}) {
    max-width: 20rem;
    margin-right: 0rem;
  }
  @media (max-width: ${media.mobileL}) {
    max-width: 18rem;
  }
  @media (max-width: ${media.mobileS}) {
    max-width: 15rem;
  }
`;

export const AboutTitle = styled.h1`
  font-size: ${typeface.$md};

  margin-bottom: 2.3125rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$md2};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$md3};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$md4};
  }
`;

// About Text
export const AboutText = styled.h2`
  font-size: ${typeface.$sm};

  text-align: justify;
  max-width: 23.9375rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$sm2};
  }
  @media (max-width: ${media.laptopM}) {
    max-width: 20.4375rem;
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$sm3};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$sm4};
  }
`;

// About Image
export const AboutImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 27.5625rem;
  width: 37.25rem;

  @media (max-width: ${media.laptopL}) {
    height: 20.5625rem;
    width: 30.25rem;
  }

  @media (max-width: ${media.laptopM}) {
    height: 17.0625rem;
    width: 26.75rem;
  }
  @media (max-width: ${media.laptopS}) {
    margin-top: 8.75rem;
    margin-right: 8.75rem;
  }
  @media (max-width: ${media.tablet}) {
    height: 14.0625rem;
    width: 23.75rem;

    margin-right: 0.75rem;
  }
  @media (max-width: ${media.between}) {
    height: 11.0625rem;
    width: 20rem;

    margin-right: 0rem;
  }
  @media (max-width: ${media.mobileL}) {
    height: 9.0625rem;
    width: 18rem;

    margin-top: 5rem;
  }
  @media (max-width: ${media.mobileS}) {
    height: 9.0625rem;
    width: 15rem;

    margin-top: 4rem;
  }
`;

import styled from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// Hero Container
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 10rem 0rem 11.25rem 0rem;
`;

// Hero Title
export const HeroTitle = styled.h1`
  font-size: ${typeface.$xl};
  color: ${color.$darkgreen};

  margin-right: 15rem;
  margin-bottom: -3rem;

  max-width: 40rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$xl2};
    margin-right: 10rem;
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$xl3};
    max-width: 35rem;
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$xl4};
    max-width: 32rem;
    margin-right: 0rem;
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xl5};
    max-width: 23rem;
  }
  @media (max-width: ${media.between}) {
    font-size: ${typeface.$xl6};
    max-width: 18rem;
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${typeface.$xl7};
    max-width: 15rem;
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$xl8};
    max-width: 12.5rem;
  }
  @media (max-width: ${media.mobileS}) {
    font-size: ${typeface.$xl9};
    max-width: 10rem;
  }
`;

// Hero Image
export const HeroImage = styled.div`
  z-index: -1;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 43rem;
  width: 67rem;

  @media (max-width: ${media.laptopL}) {
    height: 37rem;
    width: 57rem;
  }
  @media (max-width: ${media.laptopM}) {
    height: 30rem;
    width: 50rem;
  }
  @media (max-width: ${media.laptopS}) {
    height: 23.5rem;
    width: 35rem;
    margin-top: 0.5rem;
  }
  @media (max-width: ${media.tablet}) {
    height: 18.6rem;
    width: 25rem;
    margin-top: 1.2rem;
  }
  @media (max-width: ${media.between}) {
    height: 16rem;
    width: 20rem;
    margin-top: 1.5rem;
  }
  @media (max-width: ${media.mobileL}) {
    height: 15rem;
    width: 18rem;
    margin-top: 1.7rem;
  }
  @media (max-width: ${media.mobileM}) {
    margin-top: 1.9rem;
  }
  @media (max-width: ${media.mobileS}) {
    height: 13.5rem;
    width: 15rem;
    margin-top: 2rem;
  }
`;

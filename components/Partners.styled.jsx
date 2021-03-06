import styled from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// Partners Container
export const PartnersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 11.25rem;
  margin: 11.25rem 0rem 0rem 0rem;

  @media (max-width: ${media.between}) {
    padding-top: 8.25rem;
    margin: 8.25rem 0rem 0rem 0rem;
  }
`;

export const PartnersFieldDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const PartnersDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 67rem;

  @media (max-width: ${media.laptopL}) {
    width: 57rem;
  }
  @media (max-width: ${media.laptopM}) {
    width: 50rem;
  }
  @media (max-width: ${media.laptopS}) {
    width: 35rem;
  }
  @media (max-width: ${media.tablet}) {
    width: 25rem;
  }
  @media (max-width: ${media.between}) {
    width: 20rem;
  }
  @media (max-width: ${media.mobileL}) {
    width: 18rem;
  }

  @media (max-width: ${media.mobileS}) {
    width: 15rem;
  }
`;

// Partners Title
export const PartnersTitle = styled.h1`
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

// Partners Field
export const PartnersFieldInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-right: 2rem;
  margin-bottom: 2rem;

  @media (max-width: ${media.laptopM}) {
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
  }
  @media (max-width: ${media.tablet}) {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
  @media (max-width: ${media.mobileL}) {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;

export const PartnersField = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 8rem;
  width: 8rem;

  @media (max-width: ${media.laptopM}) {
    height: 6rem;
    width: 6rem;
  }
  @media (max-width: ${media.tablet}) {
    height: 4.5rem;
    width: 4.5rem;
  }
  @media (max-width: ${media.mobileL}) {
    height: 3.5rem;
    width: 3.5rem;
  }
`;

export const PartnersName = styled.h2`
  font-size: ${typeface.$sm};

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$sm2};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$sm3};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$sm4};
  }
`;

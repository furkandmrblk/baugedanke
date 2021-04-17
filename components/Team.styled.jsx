import styled from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// Team Container
export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 22.5rem 0rem 0rem 0rem;

  @media (max-width: ${media.between}) {
    margin: 16.5rem 0rem 0rem 0rem;
  }
`;

export const TeamBottomDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

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

// Team Title
export const TeamTitle = styled.h1`
  font-size: ${typeface.$md};

  width: 67rem;

  margin-bottom: 2.3125rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$md2};
    width: 57rem;
  }
  @media (max-width: ${media.laptopM}) {
    width: 50rem;
  }
  @media (max-width: ${media.laptopS}) {
    width: 35rem;
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$md3};
    width: 25rem;
  }
  @media (max-width: ${media.between}) {
    width: 20rem;
  }
  @media (max-width: ${media.mobileL}) {
    width: 18rem;
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$md4};
  }
  @media (max-width: ${media.mobileS}) {
    width: 15rem;
  }
`;

// Team Card
export const TeamCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  height: 24.9375rem;
  width: 21.375rem;

  background-color: ${color.$darkgreen};
  color: ${color.$white};

  margin-right: 1.4375rem;
  margin-bottom: 1.4375rem;

  &:nth-child(3) {
    margin-right: 0rem;
  }
  &:nth-child(6) {
    margin-right: 0rem;
  }
  &:nth-child(9) {
    margin-right: 0rem;
  }
  &:nth-child(12) {
    margin-right: 0rem;
  }

  @media (max-width: ${media.laptopL}) {
    height: 19.9375rem;
    width: 18.045rem;

    margin-right: 1.3375rem;
    margin-bottom: 1.3375rem;
  }
  @media (max-width: ${media.laptopM}) {
    height: 19.9375rem;
    width: 15.711rem;
  }
  @media (max-width: ${media.laptopS}) {
    height: 20.9375rem;
    width: 16.711rem;

    &:nth-child(3) {
      margin-right: 1.3375rem;
    }
    &:nth-child(9) {
      margin-right: 1.3375rem;
    }

    &:nth-child(2) {
      margin-right: 0rem;
    }
    &:nth-child(4) {
      margin-right: 0rem;
    }
    &:nth-child(6) {
      margin-right: 0rem;
    }
    &:nth-child(8) {
      margin-right: 0rem;
    }
  }
  @media (max-width: ${media.tablet}) {
    height: 14.9375rem;
    width: 10.1875rem;
  }
  @media (max-width: ${media.between}) {
    height: 13.9375rem;
    width: 9.1875rem;

    margin-right: 0.7375rem;
    margin-bottom: 0.7375rem;

    &:nth-child(3) {
      margin-right: 0.7375rem;
    }
    &:nth-child(9) {
      margin-right: 0.7375rem;
    }
  }
  @media (max-width: ${media.mobileL}) {
    height: 12.9375rem;
    width: 8.1875rem;
  }
  @media (max-width: ${media.mobileS}) {
    height: 11.9375rem;
    width: 7.1875rem;

    margin-right: 0.2375rem;
    margin-bottom: 0.1775rem;

    &:nth-child(3) {
      margin-right: 0.2375rem;
    }
    &:nth-child(9) {
      margin-right: 0.2375rem;
    }
  }
`;

// Team Card -Name
export const TeamCardName = styled.h1`
  font-size: ${typeface.$sm};

  max-width: 200px;

  margin-bottom: 1rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$sm2};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$sm3};
    margin-bottom: 0.3rem;
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$sm4};
  }
`;

// Team Card -Job
export const TeamCardJob = styled.h2`
  font-size: ${typeface.$xs};
  font-weight: ${typeface.$thin};
  max-width: 200px;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$xs2};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs3};
  }
`;

// Team Card -Number
export const TeamCardNumber = styled.a`
  font-size: ${typeface.$xs};
  font-weight: ${typeface.$thin};
  color: ${color.$white};
  max-width: 194px;

  margin-bottom: 1.5rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$xs2};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs3};
  }
`;

// Team Card -Image
export const TeamCardImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 13.5rem;
  width: 12.125rem;

  margin-bottom: 1rem;

  @media (max-width: ${media.laptopL}) {
    height: 10.5rem;
    width: 10.125rem;
  }
  @media (max-width: ${media.laptopS}) {
    height: 11.5rem;
    width: 10.125rem;
  }
  @media (max-width: ${media.tablet}) {
    height: 7.5rem;
    width: 7.125rem;
  }
  @media (max-width: ${media.between}) {
    height: 7rem;
    width: 6.125rem;
  }
  @media (max-width: ${media.mobileL}) {
    height: 6rem;
    width: 6.125rem;
  }
  @media (max-width: ${media.mobileS}) {
    height: 5.5rem;
    width: 5.125rem;
  }
`;

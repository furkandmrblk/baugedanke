import styled from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// Services Container
export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 22.5rem 0rem 0rem 0rem;

  @media (max-width: ${media.between}) {
    margin: 16.5rem 0rem 0rem 0rem;
  }
`;

export const ServicesBottomDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 3.125rem;

  @media (max-width: ${media.laptopS}) {
    flex-direction: column;
    align-items: flex-start;

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

// Services Image
export const ServicesImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 31.8125rem;
  width: 67rem;

  @media (max-width: ${media.laptopL}) {
    height: 21.8125rem;
    width: 57rem;
  }
  @media (max-width: ${media.laptopM}) {
    height: 18.8125rem;
    width: 50rem;
  }
  @media (max-width: ${media.laptopS}) {
    height: 18.8125rem;
    width: 35rem;
  }
  @media (max-width: ${media.tablet}) {
    height: 12.8125rem;
    width: 25rem;
  }
  @media (max-width: ${media.between}) {
    height: 8.8125rem;
    width: 20rem;
  }
  @media (max-width: ${media.mobileL}) {
    height: 7.8125rem;
    width: 18rem;
  }
  @media (max-width: ${media.mobileS}) {
    height: 6.8125rem;
    width: 15rem;
  }
`;

// Services TextDiv
export const ServicesTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-right: 15rem;

  @media (max-width: ${media.laptopL}) {
    margin-right: 10rem;
  }
  @media (max-width: ${media.laptopM}) {
    margin-right: 5rem;
  }
  @media (max-width: ${media.mobileS}) {
    margin-right: 0rem;
  }
`;

// Services Title
export const ServicesTitle = styled.h1`
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

// Services Text
export const ServicesText = styled.h2`
  font-size: ${typeface.$sm};

  text-align: justify;
  max-width: 23.9375rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$sm2};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$sm3};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$sm4};
  }
  @media (max-width: ${media.mobileS}) {
    max-width: 15rem;
  }
`;

// Services Items & SVG
export const ServicesItemDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ServicesColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-right: 9.0625rem;

  @media (max-width: ${media.laptopL}) {
    margin-right: 6.0625rem;
  }

  @media (max-width: ${media.laptopL}) {
    margin-right: 4.0625rem;
  }
  @media (max-width: ${media.mobileS}) {
    margin-right: 2.0625rem;
  }
`;

export const ServicesColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ServicesInnerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ServicesItem = styled.h2`
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

export const ServicesSvg = styled.div`
  background-image: url('/circle-ok.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 18px;
  width: 18px;

  margin-right: 2.1875rem;

  @media (max-width: ${media.tablet}) {
    height: 13px;
    width: 13px;
  }
`;

export const ServicesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${media.laptopS}) {
    margin-top: 3.125rem;
  }
  @media (max-width: ${media.tablet}) {
    margin-top: 1.125rem;
  }
`;

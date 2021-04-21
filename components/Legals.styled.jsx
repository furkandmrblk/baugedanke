import styled from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// Container
export const LegalsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10rem 0rem;
`;

export const LegalsContent = styled.div`
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

// Title
export const LegalsTitle = styled.h1`
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

// Text
export const LegalsTextTitle = styled.h1`
  font-size: ${typeface.$sm};

  margin-top: 1rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$sm2};
  }
  @media (max-width: ${media.laptopM}) {
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$sm3};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$sm4};
  }
`;

export const LegalsText = styled.h2`
  font-size: ${typeface.$sm};

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$sm2};
  }
  @media (max-width: ${media.laptopM}) {
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$sm3};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$sm4};
  }
`;

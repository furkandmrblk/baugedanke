import styled from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// Footer Container
export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  background-color: ${color.$darkgreen};
  color: ${color.$white};

  padding: 10rem 11.5rem;
  margin: 22.5rem 0rem 0rem 0rem;

  @media (max-width: ${media.laptopM}) {
    padding: 10rem 6.5rem;
  }
  @media (max-width: ${media.laptopS}) {
    padding: 10rem 2.5rem;
  }
  @media (max-width: ${media.between}) {
    flex-wrap: wrap;
    justify-content: space-between;

    margin: 16.5rem 0rem 0rem 0rem;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${media.between}) {
    margin-right: 0.5rem;
  }
`;

export const FooterColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${media.between}) {
    width: 100vw;
    margin-bottom: 2.5rem;
  }
`;

// Footer Name
export const FooterName = styled.h1`
  font-size: ${typeface.$sm};

  margin-bottom: 0.9375rem;

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

// Footer Slogan
export const FooterSlogan = styled.h2`
  font-size: ${typeface.$xs};
  font-weight: ${typeface.$thin};

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$xs2};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs3};
  }
`;

// Footer Title
export const FooterTitle = styled.h1`
  font-size: ${typeface.$sm};

  margin-bottom: 2.2rem;

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

// Footer Item
export const FooterItem = styled.a`
  font-size: ${typeface.$xs};
  font-weight: ${typeface.$thin};

  color: ${color.$white};

  &:hover {
    color: ${color.$yellow};
  }

  transition: color 450ms ease-in-out;

  margin-bottom: 2rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$xs2};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs3};
    margin-bottom: 1rem;
  }
`;

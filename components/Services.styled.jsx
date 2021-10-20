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

  padding-top: 11.25rem;
  margin: 11.25rem 0rem 0rem 0rem;

  @media (max-width: ${media.between}) {
    padding-top: 8.25rem;
    margin: 8.25rem 0rem 0rem 0rem;
  }
`;

export const ServicesBottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 67rem;

  margin-top: 3.125rem;

  @media (max-width: ${media.laptopL}) {
    width: 57rem;
  }
  @media (max-width: ${media.laptopM}) {
    width: 50rem;
  }
  @media (max-width: ${media.laptopS}) {
    /* flex-direction: column;
    align-items: flex-start; */

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

  margin-bottom: 7.5rem;

  @media (max-width: ${media.laptopL}) {
    margin-bottom: 5rem;
  }
  @media (max-width: ${media.between}) {
    margin-bottom: 3.5rem;
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
  max-width: 29.9375rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$sm2};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$sm3};
  }
  @media (max-width: ${media.between}) {
    max-width: 20rem;
  }
  @media (max-width: ${media.mobileL}) {
    max-width: 18rem;
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

  margin-right: 2.5rem;
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

  cursor: pointer;

  @media (max-width: ${media.laptopS}) {
    margin-top: 0.5rem;
  }
`;

export const ServicesInnerInnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 20rem;

  @media (max-width: ${media.between}) {
    width: 12.5rem;
  }
  @media (max-width: ${media.mobileS}) {
    width: 11.25rem;
  }
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

export const DropdownSvg = styled.div`
  background-image: url('/dropdown.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 11px;
  width: 20px;

  margin-top: 0.2175rem;

  transition: all 250ms ease-in-out;

  @media (max-width: ${media.tablet}) {
    margin-top: 0.2rem;
    height: 8px;
    width: 16px;
  }
`;

export const ServicesWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: ${media.laptopS}) {
    flex-direction: column;

    margin-top: 1.125rem;
  }
`;

export const ServiceDescription1 = styled.h2`
  font-size: ${typeface.$xs};
  font-weight: ${typeface.$thin};
  color: #000;

  text-align: left;
  max-width: 22.5rem;

  margin: ${({ open1 }) => (open1 ? '1rem 0rem' : '0')};
  height: ${({ open1 }) => (open1 ? 'auto' : '0')};
  opacity: ${({ open1 }) => (open1 ? '1' : '0')};

  overflow: hidden;

  transition: all 500ms ease-in;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$xs2};

    margin: ${({ open1 }) => (open1 ? '0.75rem 0rem' : '0')};
    height: ${({ open1 }) => (open1 ? 'auto' : '0')};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs3};

    margin: ${({ open1 }) => (open1 ? '0.75rem 0rem' : '0')};
    height: ${({ open1 }) => (open1 ? 'auto' : '0')};
  }
`;

export const ServiceDescription2 = styled.h2`
  font-size: ${typeface.$xs};
  font-weight: ${typeface.$thin};
  color: #000;

  text-align: left;
  max-width: 22.5rem;

  margin: ${({ open2 }) => (open2 ? '1rem 0rem' : '0')};
  height: ${({ open2 }) => (open2 ? 'auto' : '0')};
  opacity: ${({ open2 }) => (open2 ? '1' : '0')};

  overflow: hidden;

  transition: all 500ms ease-in-out;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$xs2};

    margin: ${({ open2 }) => (open2 ? '0.75rem 0rem' : '0')};
    height: ${({ open2 }) => (open2 ? 'auto' : '0')};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs3};

    margin: ${({ open2 }) => (open2 ? '0.75rem 0rem' : '0')};
    height: ${({ open2 }) => (open2 ? 'auto' : '0')};
  }
`;

export const ServiceDescription3 = styled.h2`
  font-size: ${typeface.$xs};
  font-weight: ${typeface.$thin};
  color: #000;

  text-align: left;
  max-width: 22.5rem;

  margin: ${({ open3 }) => (open3 ? '1rem 0rem' : '0')};
  height: ${({ open3 }) => (open3 ? 'auto' : '0')};
  opacity: ${({ open3 }) => (open3 ? '1' : '0')};

  overflow: hidden;

  transition: all 500ms ease-in-out;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$xs2};

    margin: ${({ open3 }) => (open3 ? '0.75rem 0rem' : '0')};
    height: ${({ open3 }) => (open3 ? 'auto' : '0')};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs3};

    margin: ${({ open3 }) => (open3 ? '0.75rem 0rem' : '0')};
    height: ${({ open3 }) => (open3 ? 'auto' : '0')};
  }
`;

export const ServiceDescription4 = styled.h2`
  font-size: ${typeface.$xs};
  font-weight: ${typeface.$thin};
  color: #000;

  text-align: left;
  max-width: 22.5rem;

  margin: ${({ open4 }) => (open4 ? '1rem 0rem' : '0')};
  height: ${({ open4 }) => (open4 ? 'auto' : '0')};
  opacity: ${({ open4 }) => (open4 ? '1' : '0')};

  overflow: hidden;

  transition: all 500ms ease-in-out;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$xs2};

    margin: ${({ open4 }) => (open4 ? '0.75rem 0rem' : '0')};
    height: ${({ open4 }) => (open4 ? 'auto' : '0')};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs3};

    margin: ${({ open4 }) => (open4 ? '0.75rem 0rem' : '0')};
    height: ${({ open4 }) => (open4 ? 'auto' : '0')};
  }
`;

export const ServiceDescription5 = styled.h2`
  font-size: ${typeface.$xs};
  font-weight: ${typeface.$thin};
  color: #000;

  text-align: left;
  max-width: 22.5rem;

  margin: ${({ open5 }) => (open5 ? '1rem 0rem' : '0')};
  height: ${({ open5 }) => (open5 ? 'auto' : '0')};
  opacity: ${({ open5 }) => (open5 ? '1' : '0')};

  overflow: hidden;

  transition: all 500ms ease-in-out;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$xs2};

    margin: ${({ open5 }) => (open5 ? '0.75rem 0rem' : '0')};
    height: ${({ open5 }) => (open5 ? 'auto' : '0')};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs3};

    margin: ${({ open5 }) => (open5 ? '0.75rem 0rem' : '0')};
    height: ${({ open5 }) => (open5 ? 'auto' : '0')};
  }
`;

export const ServiceDescription6 = styled.h2`
  font-size: ${typeface.$xs};
  font-weight: ${typeface.$thin};
  color: #000;

  text-align: left;
  max-width: 22.5rem;

  margin: ${({ open6 }) => (open6 ? '1rem 0rem' : '0')};
  height: ${({ open6 }) => (open6 ? 'auto' : '0')};
  opacity: ${({ open6 }) => (open6 ? '1' : '0')};

  overflow: hidden;

  transition: all 500ms ease-in-out;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$xs2};

    margin: ${({ open6 }) => (open6 ? '0.75rem 0rem' : '0')};
    height: ${({ open6 }) => (open6 ? 'auto' : '0')};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs3};

    margin: ${({ open6 }) => (open6 ? '0.75rem 0rem' : '0')};
    height: ${({ open6 }) => (open6 ? 'auto' : '0')};
  }
`;
export const ServiceDescription7 = styled.h2`
  font-size: ${typeface.$xs};
  font-weight: ${typeface.$thin};
  color: #000;

  text-align: left;
  max-width: 22.5rem;

  margin: ${({ open7 }) => (open7 ? '1rem 0rem' : '0')};
  height: ${({ open7 }) => (open7 ? 'auto' : '0')};
  opacity: ${({ open7 }) => (open7 ? '1' : '0')};

  overflow: hidden;

  transition: all 500ms ease-in-out;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$xs2};

    margin: ${({ open7 }) => (open7 ? '0.75rem 0rem' : '0')};
    height: ${({ open7 }) => (open7 ? 'auto' : '0')};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs3};

    margin: ${({ open7 }) => (open7 ? '0.75rem 0rem' : '0')};
    height: ${({ open7 }) => (open7 ? 'auto' : '0')};
  }
`;

export const ServiceDescription8 = styled.h2`
  font-size: ${typeface.$xs};
  font-weight: ${typeface.$thin};
  color: #000;

  text-align: left;
  max-width: 22.5rem;

  margin: ${({ open8 }) => (open8 ? '1rem 0rem' : '0')};
  height: ${({ open8 }) => (open8 ? 'auto' : '0')};
  opacity: ${({ open8 }) => (open8 ? '1' : '0')};

  overflow: hidden;

  transition: all 500ms ease-in-out;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$xs2};

    margin: ${({ open8 }) => (open8 ? '0.75rem 0rem' : '0')};
    height: ${({ open8 }) => (open8 ? 'auto' : '0')};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs3};

    margin: ${({ open8 }) => (open8 ? '0.75rem 0rem' : '0')};
    height: ${({ open8 }) => (open8 ? 'auto' : '0')};
  }
`;

export const ServiceDescription9 = styled.h2`
  font-size: ${typeface.$xs};
  font-weight: ${typeface.$thin};
  color: #000;

  text-align: left;
  max-width: 22.5rem;

  margin: ${({ open9 }) => (open9 ? '1rem 0rem' : '0')};
  height: ${({ open9 }) => (open9 ? 'auto' : '0')};
  opacity: ${({ open9 }) => (open9 ? '1' : '0')};

  overflow: hidden;

  transition: all 500ms ease-in-out;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$xs2};

    margin: ${({ open9 }) => (open9 ? '0.75rem 0rem' : '0')};
    height: ${({ open9 }) => (open9 ? 'auto' : '0')};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs3};

    margin: ${({ open9 }) => (open9 ? '0.75rem 0rem' : '0')};
    height: ${({ open9 }) => (open9 ? 'auto' : '0')};
  }
`;

export const ServiceDescription10 = styled.h2`
  font-size: ${typeface.$xs};
  font-weight: ${typeface.$thin};
  color: #000;

  text-align: left;
  max-width: 22.5rem;

  margin: ${({ open10 }) => (open10 ? '1rem 0rem' : '0')};
  height: ${({ open10 }) => (open10 ? 'auto' : '0')};
  opacity: ${({ open10 }) => (open10 ? '1' : '0')};

  overflow: hidden;

  transition: all 400ms ease-in-out;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$xs2};

    margin: ${({ open10 }) => (open10 ? '0.75rem 0rem' : '0')};
    height: ${({ open10 }) => (open10 ? 'auto' : '0')};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs3};

    margin: ${({ open10 }) => (open10 ? '0.75rem 0rem' : '0')};
    height: ${({ open10 }) => (open10 ? 'auto' : '0')};
  }
`;

export const ServiceDescription11 = styled.h2`
  font-size: ${typeface.$xs};
  font-weight: ${typeface.$thin};
  color: #000;

  text-align: left;
  max-width: 22.5rem;

  margin: ${({ open11 }) => (open11 ? '1rem 0rem' : '0')};
  height: ${({ open11 }) => (open11 ? 'auto' : '0')};
  opacity: ${({ open11 }) => (open11 ? '1' : '0')};

  overflow: hidden;

  transition: all 500ms ease-in-out;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$xs2};

    margin: ${({ open11 }) => (open11 ? '0.75rem 0rem' : '0')};
    height: ${({ open11 }) => (open11 ? 'auto' : '0')};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs3};

    margin: ${({ open11 }) => (open11 ? '0.75rem 0rem' : '0')};
    height: ${({ open11 }) => (open11 ? 'auto' : '0')};
  }
`;

export const ServiceDescription12 = styled.h2`
  font-size: ${typeface.$xs};
  font-weight: ${typeface.$thin};
  color: #000;

  text-align: left;
  max-width: 22.5rem;

  margin: ${({ open12 }) => (open12 ? '1rem 0rem' : '0')};
  height: ${({ open12 }) => (open12 ? 'auto' : '0')};
  opacity: ${({ open12 }) => (open12 ? '1' : '0')};

  overflow: hidden;

  transition: all 500ms ease-in-out;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$xs2};

    margin: ${({ open12 }) => (open12 ? '0.75rem 0rem' : '0')};
    height: ${({ open12 }) => (open12 ? 'auto' : '0')};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs3};

    margin: ${({ open12 }) => (open12 ? '0.75rem 0rem' : '0')};
    height: ${({ open12 }) => (open12 ? 'auto' : '0')};
  }
`;

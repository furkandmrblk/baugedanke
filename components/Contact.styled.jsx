import styled from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// Contact Container
export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  margin: 22.5rem 0rem 0rem 0rem;

  @media (max-width: ${media.between}) {
    margin: 16.5rem 0rem 0rem 0rem;
  }
`;

// Contact LeftDiv
export const ContactLeftDiv = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-right: 5.5625rem;

  @media (max-width: ${media.laptopL}) {
    margin-right: 0.6875rem;
  }
  @media (max-width: ${media.laptopM}) {
    margin-right: 2.6875rem;
  }
  @media (max-width: ${media.laptopS}) {
    margin-right: 0rem;
    width: 35rem;
  }
  @media (max-width: ${media.tablet}) {
    margin-right: 0rem;
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

// Contact Title
export const ContactTitle = styled.h1`
  font-size: ${typeface.$md};

  margin-bottom: 2.3125rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$md2};
  }
  @media (max-width: ${media.laptopM}) {
    max-width: 20rem;
  }
  @media (max-width: ${media.laptopS}) {
    max-width: 35rem;
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$md3};
  }
  @media (max-width: ${media.mobileL}) {
    max-width: 18rem;
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$md4};
  }
  @media (max-width: ${media.mobileS}) {
    max-width: 15rem;
  }
`;

// Contact Text
export const ContactText = styled.h2`
  font-size: ${typeface.$sm};

  max-width: 28.5375rem;

  margin-bottom: 2.3125rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$sm2};
  }
  @media (max-width: ${media.laptopM}) {
    max-width: 20rem;
  }
  @media (max-width: ${media.laptopS}) {
    max-width: 30rem;
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$sm3};
    max-width: 24rem;
  }
  @media (max-width: ${media.mobileL}) {
    max-width: 16rem;
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$sm4};
  }
`;

// Contact Label
export const ContactLabel = styled.label`
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

// Contact Input
export const ContactInput = styled.input`
  height: 2.4375rem;
  width: 21.9375rem;

  background-color: ${color.$gray};
  border: none;
  border-radius: 5px;

  margin-bottom: 1.3125rem;

  font-family: ${typeface.ibm};
  font-size: ${typeface.$xs};
  font-weight: ${typeface.$light};
  padding-left: 0.5rem;

  &::-webkit-input-placeholder {
    font-family: ${typeface.ibm};
    font-size: ${typeface.$xs};
    font-weight: ${typeface.$light};
  }
  &:-moz-placeholder {
    font-family: ${typeface.ibm};
    font-size: ${typeface.$xs};
    font-weight: ${typeface.$light};
  }
  &::-moz-placeholder {
    font-family: ${typeface.ibm};
    font-size: ${typeface.$xs};
    font-weight: ${typeface.$light};
  }
  &:-ms-input-placeholder {
    font-family: ${typeface.ibm};
    font-size: ${typeface.$xs};
    font-weight: ${typeface.$light};
  }

  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs2};

    &::-webkit-input-placeholder {
      font-size: ${typeface.$xs2};
    }
    &:-moz-placeholder {
      font-size: ${typeface.$xs2};
    }
    &::-moz-placeholder {
      font-size: ${typeface.$xs2};
    }
    &:-ms-input-placeholder {
      font-size: ${typeface.$xs2};
    }
  }
  @media (max-width: ${media.between}) {
    width: 20rem;
  }
  @media (max-width: ${media.mobileL}) {
    width: 18rem;
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$sm4};

    &::-webkit-input-placeholder {
      font-size: ${typeface.$sm4};
    }
    &:-moz-placeholder {
      font-size: ${typeface.$sm4};
    }
    &::-moz-placeholder {
      font-size: ${typeface.$sm4};
    }
    &:-ms-input-placeholder {
      font-size: ${typeface.$sm4};
    }
  }
  @media (max-width: ${media.mobileS}) {
    width: 15rem;
  }
`;

// Contact Textarea
export const ContactTextarea = styled.textarea`
  height: 10.75rem;
  width: 22rem;

  background-color: ${color.$gray};
  border: none;
  border-radius: 5px;
  resize: none;

  font-family: ${typeface.ibm};
  font-size: ${typeface.$xs};
  font-weight: ${typeface.$light};

  margin-bottom: 2.3125rem;

  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs2};
  }
  @media (max-width: ${media.between}) {
    width: 20rem;
  }
  @media (max-width: ${media.mobileL}) {
    width: 18rem;
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$sm4};
  }
  @media (max-width: ${media.mobileS}) {
    width: 15rem;
  }
`;

// Contact Button
export const ContactButton = styled.button`
  height: 2.4375rem;
  width: 7.75rem;

  background-color: ${color.$yellow};
  color: ${color.$black};

  border: none;
  border-radius: 5px;

  &:hover {
    background-color: ${color.$darkgreen};
    color: ${color.$white};
  }

  transition: all 450ms ease-in-out;

  font-family: ${typeface.ibm};
  font-size: ${typeface.$xs};
  font-weight: ${typeface.$light};

  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs2};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$sm4};
  }
`;

// ContactImage
export const ContactImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 41.75rem;
  width: 32.8125rem;

  @media (max-width: ${media.laptopL}) {
    height: 40.35rem;
    width: 27.8125rem;
  }
  @media (max-width: ${media.laptopM}) {
    height: 43.75rem;
    width: 24.0125rem;
  }
  @media (max-width: ${media.laptopS}) {
    display: none;
  }
`;

import styled from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// Projects Container
export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;

  margin: 22.5rem 0rem 0rem 0rem;

  @media (max-width: ${media.between}) {
    margin: 16.5rem 0rem 0rem 0rem;
  }
`;

export const ProjectsDiv = styled.div`
  position: relative;
  display: flex;

  align-items: center;

  background-color: ${color.$darkgreen};

  height: 34.8125rem;
  width: 100vw;

  @media (max-width: ${media.laptopL}) {
    height: 31.8125rem;
  }
  @media (max-width: ${media.laptopM}) {
    height: 29.8125rem;
  }
  @media (max-width: ${media.laptopS}) {
    height: 24.8125rem;
  }
  @media (max-width: ${media.tablet}) {
    height: 20.8125rem;
  }
  @media (max-width: ${media.mobileL}) {
    height: 18.8125rem;
  }
`;

// Projects Title
export const ProjectsTitle = styled.h1`
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
  @media (max-width: ${media.mobileS}) {
    width: 15rem;
  }
`;

// Projects Slider
export const ProjectsSlider = styled.div`
  z-index: 100;
  position: absolute;
  right: 0;
  left: 0;

  width: 100%;
  height: 30rem;

  overflow: hidden;

  @media (max-width: ${media.laptopL}) {
    height: 27rem;
  }
  @media (max-width: ${media.laptopM}) {
    height: 25rem;
  }
  @media (max-width: ${media.laptopS}) {
    height: 20rem;
  }
  @media (max-width: ${media.tablet}) {
    /* height: 16rem; */
    display: none;
  }
`;

// Projects Item
export const ProjectsItem = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 29rem;
  width: 28rem;

  margin-right: 2rem;

  @media (max-width: ${media.laptopL}) {
    height: 27rem;
    width: 26rem;
  }
  @media (max-width: ${media.laptopM}) {
    height: 25rem;
    width: 24rem;
  }
  @media (max-width: ${media.laptopS}) {
    height: 20rem;
    width: 19rem;
  }
  @media (max-width: ${media.tablet}) {
    height: 16rem;
    width: 15rem;
  }
`;

// Projects Click Me (Später versuchen)
export const ProjectCTA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  margin-right: 1rem;
  margin-bottom: 1rem;

  height: 8.75rem;
  width: 8.75rem;
  border-radius: 50%;

  background-color: ${color.$white};

  &:hover {
    background-color: ${color.$yellow};
  }

  transition: background-color 450ms ease-in-out;

  @media (max-width: ${media.laptopL}) {
    height: 7.75rem;
    width: 7.75rem;
  }
  @media (max-width: ${media.laptopS}) {
    height: 5.75rem;
    width: 5.75rem;
  }
  @media (max-width: ${media.tablet}) {
    height: 4.75rem;
    width: 4.75rem;
  }
`;

export const ProjectCTAText = styled.a`
  font-size: ${typeface.$xs};
  color: ${color.$black};

  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$xs2};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs3};
    font-weight: ${typeface.$regular};
  }
`;

// Projects InnerSlider
export const ProjectsInnerSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  padding-left: 2rem;
  padding-right: 2rem;

  pointer-events: none;

  ${ProjectCTA} {
    pointer-events: initial;
  }

  display: flex;
  align-items: center;
  transition: 0s ease-in;

  @media (max-width: ${media.mobileS}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// Projects Mobile Slider
export const ProjectsMobileSlider = styled.div`
  @media (min-width: ${media.tablet}) {
    display: none;
  }
  @media (max-width: ${media.tablet}) {
    z-index: 100;
    position: absolute;
    right: 0;
    left: 0;

    width: 100%;
    height: 30rem;

    overflow: hidden;

    height: 16rem;
  }
`;

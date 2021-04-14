import styled from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// Project Container
export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 15rem 0rem 0rem 0rem;

  @media (max-width: ${media.between}) {
    padding-top: 8rem;
  }
`;

export const ProjectRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 66.5rem;

  @media (max-width: ${media.laptopM}) {
    width: 56.5rem;
  }
  @media (max-width: ${media.laptopS}) {
    width: 42.5rem;
  }
  @media (max-width: ${media.tablet}) {
    width: 30.5rem;
  }
  @media (max-width: ${media.between}) {
    flex-direction: column;
    width: 20rem;
  }
  @media (max-width: ${media.mobileL}) {
    width: 18rem;
  }
  @media (max-width: ${media.mobileS}) {
    width: 15rem;
  }
`;

export const ProjectColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${media.between}) {
    order: 1;
  }
`;

// Project Background
export const ProjectBackground = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  height: 27rem;
  width: 100vw;

  background-color: ${color.$darkgreen};

  @media (max-width: ${media.laptopS}) {
    height: 25rem;
  }
  @media (max-width: ${media.tablet}) {
    height: 23rem;
  }
  @media (max-width: ${media.between}) {
    height: 38.5rem;
  }
`;

// Project Title + Description
export const ProjectTitle = styled.h1`
  font-size: ${typeface.$md};
  color: ${color.$white};

  margin-top: 4rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$md2};
  }
  @media (max-width: ${media.laptopS}) {
    margin-top: 0rem;
    margin-bottom: 0.5rem;
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$md3};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$md4};
  }
`;

export const ProjectDescription = styled.h2`
  font-size: ${typeface.$xs};
  color: ${color.$white};

  margin-bottom: 10.5rem;

  @media (max-width: ${media.laptopM}) {
    margin-bottom: 5.5rem;
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs2};
    margin-bottom: 4.5rem;
  }
  @media (max-width: ${media.between}) {
    margin-bottom: 0rem;
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$sm4};
  }
`;

// Project Image
export const ProjectImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 29rem;
  width: 28rem;

  margin-bottom: 5rem;

  @media (max-width: ${media.laptopM}) {
    height: 25rem;
    width: 24rem;

    &:not(:last-child) {
      margin-right: 3rem;
    }
    &:last-child {
      margin-left: 3rem;
    }
  }
  @media (max-width: ${media.tablet}) {
    height: 21rem;
    width: 20rem;

    &:not(:last-child) {
      margin-right: 1.5rem;
    }
    &:last-child {
      margin-left: 1.5rem;
    }
  }
  @media (max-width: ${media.between}) {
    order: 2;

    &:not(:last-child) {
      margin-right: 0rem;
    }
    &:last-child {
      margin-left: 0rem;
    }
    margin: 3rem 0rem;
  }
  @media (max-width: ${media.mobileL}) {
    height: 19rem;
    width: 18rem;
  }
  @media (max-width: ${media.mobileS}) {
    height: 16rem;
    width: 15rem;
  }
`;

// Project Details + Detail Items
export const ProjectDetailsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 27.5rem;

  @media (max-width: ${media.laptopM}) {
    width: 22rem;

    margin-right: 3.35rem;
  }
  @media (max-width: ${media.laptopS}) {
    width: 19rem;

    margin-right: 3.2rem;
  }
  @media (max-width: ${media.tablet}) {
    width: 13.5rem;

    margin-right: 3.5rem;
  }
  @media (max-width: ${media.tablet}) {
    width: 20rem;

    margin-right: 0rem;
  }
  @media (max-width: ${media.mobileL}) {
    width: 18rem;
  }
  @media (max-width: ${media.mobileS}) {
    width: 15rem;
  }
`;

export const ProjectDetailsTitle = styled.h1`
  font-size: ${typeface.$xs};

  margin-bottom: 1rem;

  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs2};
  }

  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$sm4};
  }
`;

export const ProjectDetails = styled.h2`
  font-size: ${typeface.$xs};

  margin-bottom: 0.375rem;

  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs2};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$sm4};
  }
`;

export const ProjectDetailsInfo = styled.h2`
  font-size: ${typeface.$xs};

  margin-bottom: 0.375rem;

  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs2};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$sm4};
  }
`;

// Project Text Title + Text
export const ProjectTextTitle = styled.h1`
  font-size: ${typeface.$xs};

  margin-bottom: 1rem;

  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs2};
  }
  @media (max-width: ${media.between}) {
    margin-top: 3rem;
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$sm4};
  }
`;
export const ProjectText = styled.h2`
  font-size: ${typeface.$xs};

  max-width: 528px;

  text-align: justify;

  margin-bottom: 5rem;

  @media (max-width: ${media.laptopS}) {
    max-width: 400px;
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs2};
    max-width: 15rem;
  }
  @media (max-width: ${media.between}) {
    margin-bottom: 0rem;
    max-width: 20rem;
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$sm4};
  }
`;

// Project Big Image
export const ProjectBigImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 29rem;
  width: 66.5rem;

  margin-bottom: 5rem;

  @media (max-width: ${media.laptopM}) {
    height: 27rem;
    width: 56.5rem;
  }
  @media (max-width: ${media.laptopS}) {
    height: 22rem;
    width: 42.5rem;
  }
  @media (max-width: ${media.tablet}) {
    height: 16rem;
    width: 30.5rem;
  }
  @media (max-width: ${media.between}) {
    height: 10rem;
    width: 20rem;
    margin: 3rem 0rem;
  }
  @media (max-width: ${media.mobileL}) {
    height: 10rem;
    width: 18rem;
  }
  @media (max-width: ${media.mobileS}) {
    height: 10rem;
    width: 15rem;
  }
`;

export const ProjectHeroColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${media.between}) {
    color: ${color.$white};
  }
`;

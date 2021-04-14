import styled from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';
import { media } from '../theme/MediaQueries';

// Navbar Container
export const NavContainer = styled.div`
  z-index: 1000;
  position: fixed;
  width: 100vw;

  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);

  padding: 0rem 5.9375rem;

  @media (max-width: ${media.laptopS}) {
    padding: 0rem 2rem;
  }
  @media (max-width: ${media.tablet}) {
    /* padding: 0rem 1.5rem; */
  }
  @media (max-width: ${media.mobileL}) {
    /* padding: 0rem 1.5rem; */
  }
`;
export const NavDiv = styled.div`
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${color.$black};
`;

// Nav Logo
export const NavLogo = styled.div`
  z-index: 1000;
  background-image: url('/Logo.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  cursor: pointer;

  height: 7.5rem;
  width: 7.5rem;

  @media (max-width: ${media.tablet}) {
    height: 6rem;
    width: 6rem;
  }
  @media (max-width: ${media.mobileL}) {
    height: 5rem;
    width: 5rem;

    margin-left: -1.5rem;
  }
`;

// Nav Items
export const NavItemDiv = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${media.laptopS}) {
    display: none;
  }
`;

export const NavItem = styled.a`
  font-size: ${typeface.$xs};

  &:hover {
    color: ${color.$lightgreen};
  }

  transition: color 450ms ease-in-out;

  margin-right: 3rem;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$xs2};
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$lg};

    margin-right: 0rem;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$lg};

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
  @media (max-width: ${media.between}) {
    font-size: ${typeface.$lg};

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${typeface.$lg2};

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$lg2};

    &:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }
  @media (max-width: ${media.mobileS}) {
    font-size: ${typeface.$lg2};

    &:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }
`;

// Nav Button
export const NavButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${color.$yellow};
  height: 56px;
  width: 146px;

  font-size: ${typeface.$xs};
  color: ${color.$black};

  &:hover {
    background-color: ${color.$darkgreen};
    color: ${color.$white};
  }

  transition: all 450ms ease-in-out;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$xs2};
    height: 51px;
    width: 136px;
  }
`;

// Nav Hamburger
export const NavHamburgerDiv = styled.div`
  display: none;
  @media (max-width: ${media.laptopS}) {
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }
`;

export const NavHamburger = styled.span`
  height: 0px;
  width: 2.5rem;

  border: 1px solid ${color.$black};

  &:first-child {
    margin-bottom: 0.7rem;
  }

  transition: border 650ms ease-in-out;

  @media (max-width: ${media.between}) {
    width: 2.2rem;

    border: ${({ open }) =>
      open ? `0.7px solid ${color.$white}` : `1px solid ${color.$black}`};

    &:first-child {
      margin-bottom: 0.6rem;
    }
  }
`;

// Nav Menu
export const NavMenu = styled.div`
  @media (min-width: ${media.laptopS}) {
    display: none;
  }

  position: absolute;
  display: flex;
  align-items: center;

  white-space: nowrap;
  overflow: hidden;

  top: 0;
  right: 0;

  background-color: ${color.$white};
  color: ${color.$white};

  height: 100vh;
  width: ${({ open }) => (open ? '100vw' : '0vw')};

  transition: all 600ms ease-in-out;

  @media (max-width: ${media.tablet}) {
    justify-content: flex-start;
  }
  @media (max-width: ${media.between}) {
    flex-direction: column;
  }
`;

// Nav Menu Left
export const NavMenuLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background-color: ${color.$darkgreen};

  height: 100vh;
  width: 65vw;

  padding: 3rem;

  @media (max-width: ${media.between}) {
    width: 100vw;
  }
`;

// Nav Menu Right
export const NavMenuRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  background-color: ${color.$white};

  height: 100vh;
  width: 35vw;

  padding: 21.5rem 3rem;

  @media (max-width: ${media.tablet}) {
    padding: 21.5rem 2rem;
  }
  @media (max-width: ${media.between}) {
    justify-content: flex-start;
    align-items: flex-start;

    padding: 3rem;
    height: 15vh;
    width: 100vw;

    background-color: ${color.$darkgreen};
  }
`;

export const NavRightItem = styled.a`
  font-size: ${typeface.$xs};
  color: ${color.$black};

  &:first-child {
    margin-bottom: 0.5rem;
  }

  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$xs2};
  }
  @media (max-width: ${media.between}) {
    color: ${color.$white};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$sm4};
  }
`;

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  NavButton,
  NavContainer,
  NavDiv,
  NavHamburger,
  NavHamburgerDiv,
  NavItem,
  NavItemDiv,
  NavLogo,
  NavMenu,
  NavMenuLeft,
  NavMenuRight,
  NavRightItem,
} from './Navbar.styled';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open === true) {
      document.body.style.overflow = 'hidden';
    } else if (open === false) {
      document.body.style.overflow = '';
    }
  });

  return (
    <NavContainer>
      <NavDiv>
        <Link href="/">
          <NavLogo />
        </Link>
        <NavHamburgerDiv onClick={openMenu}>
          <NavHamburger open={open} />
          <NavHamburger open={open} />
        </NavHamburgerDiv>
        <NavMenu open={open}>
          <NavMenuLeft>
            <Link href="/#uberuns">
              <NavItem onClick={openMenu}>Über Uns</NavItem>
            </Link>
            <Link href="/#unsereleistungen">
              <NavItem onClick={openMenu}>Unsere Leistungen</NavItem>
            </Link>
            <Link href="/#unsereprojekte">
              <NavItem onClick={openMenu}>Unsere Projekte</NavItem>
            </Link>
            <Link href="/#unserteam">
              <NavItem onClick={openMenu}>Unser Team</NavItem>
            </Link>
            <Link href="/#kontakt">
              <NavItem onClick={openMenu}>Kontaktiere Uns</NavItem>
            </Link>
          </NavMenuLeft>
          <NavMenuRight>
            <NavRightItem>Impressum</NavRightItem>
            <NavRightItem>Datenschutzerklärung</NavRightItem>
          </NavMenuRight>
        </NavMenu>
        <NavItemDiv>
          <Link href="/#uberuns">
            <NavItem>Über Uns</NavItem>
          </Link>
          <Link href="/#unsereleistungen">
            <NavItem>Unsere Leistungen</NavItem>
          </Link>
          <Link href="/#unsereprojekte">
            <NavItem>Unsere Projekte</NavItem>
          </Link>
          <Link href="/#unserteam">
            <NavItem>Unser Team</NavItem>
          </Link>
          <NavButton href="mailto:info@baugedanke.de">Kontakt</NavButton>
        </NavItemDiv>
      </NavDiv>
    </NavContainer>
  );
};

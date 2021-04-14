import React from 'react';
import Link from 'next/link';
import {
  FooterColumn,
  FooterColumn2,
  FooterContainer,
  FooterItem,
  FooterLogo,
  FooterName,
  FooterSlogan,
  FooterTitle,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterColumn2>
        <FooterLogo />
        <FooterName>Baugedanke Berlin</FooterName>
        <FooterSlogan>Gedacht. Geplant. Gebaut.</FooterSlogan>
      </FooterColumn2>
      <FooterColumn>
        <FooterTitle>Erkunden</FooterTitle>
        <Link href="/">
          <FooterItem>Homepage</FooterItem>
        </Link>
        <Link href="/#uberuns">
          <FooterItem>Über Uns</FooterItem>
        </Link>
        <Link href="/#unsereleistungen">
          <FooterItem>Unsere Leistungen</FooterItem>
        </Link>
        <Link href="/#unsereprojekte">
          <FooterItem>Unsere Projekte</FooterItem>
        </Link>
        <Link href="/#unserteam">
          <FooterItem>Unser Team</FooterItem>
        </Link>
      </FooterColumn>
      <FooterColumn>
        <FooterTitle>Rechtliches</FooterTitle>
        <Link href="/impressum">
          <FooterItem>Impressum</FooterItem>
        </Link>
        <Link href="/datenschutzerklärung">
          <FooterItem>Datenschutzerklärung</FooterItem>
        </Link>
        <Link href="/agb">
          <FooterItem>AGB</FooterItem>
        </Link>
      </FooterColumn>
      <FooterColumn>
        <FooterTitle>Kontakt</FooterTitle>
        <FooterItem href="mailto:info@baugedanke.de">
          info@baugedanke.de
        </FooterItem>
        <FooterItem>030 484 737 00</FooterItem>
      </FooterColumn>
    </FooterContainer>
  );
};

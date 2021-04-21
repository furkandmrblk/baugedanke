import React from 'react';
import {
  LegalsContainer,
  LegalsContent,
  LegalsText,
  LegalsTextTitle,
  LegalsTitle,
} from './Legals.styled';

export const Impressum = () => {
  return (
    <LegalsContainer>
      <LegalsContent>
        <LegalsTitle>Impressum</LegalsTitle>
        <LegalsTextTitle>Baugedanke GmbH</LegalsTextTitle>
        <LegalsText>
          Vertretungsberechtigter Geschäftsführer: Max Mustermann
        </LegalsText>
        <LegalsTextTitle>Kontakt</LegalsTextTitle>
        <LegalsText>Telefon: +49 30 123456</LegalsText>
        <LegalsText>Fax: +49 30123456</LegalsText>
        <LegalsText>E-Mail: info@baugedanke.de</LegalsText>
        <LegalsTextTitle>Registereintrag</LegalsTextTitle>
        <LegalsText>Registernummer: ABC 1234</LegalsText>
        <LegalsText>Registergericht: AG Impressumsstadt</LegalsText>
        <LegalsTextTitle>Umsatzsteuer-ID</LegalsTextTitle>
        <LegalsText>
          Umsatzsteueridentifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE
          63527364839
        </LegalsText>
      </LegalsContent>
    </LegalsContainer>
  );
};

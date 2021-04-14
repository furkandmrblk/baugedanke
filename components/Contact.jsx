import React from 'react';
import {
  ContactButton,
  ContactContainer,
  ContactImage,
  ContactInput,
  ContactLabel,
  ContactLeftDiv,
  ContactText,
  ContactTextarea,
  ContactTitle,
} from './Contact.styled';

export const Contact = (props) => {
  const data = props.props.fields;

  return (
    <ContactContainer id="kontakt">
      <ContactLeftDiv>
        <ContactTitle>{data.contactTitle}</ContactTitle>
        <ContactText>{data.contactText}</ContactText>
        <ContactLabel>Name</ContactLabel>
        <ContactInput type="text" />
        <ContactLabel>Email</ContactLabel>
        <ContactInput type="email" />
        <ContactLabel>Nachricht</ContactLabel>
        <ContactTextarea type="text" />
        <ContactButton type="onSubmit">Senden</ContactButton>
      </ContactLeftDiv>
      <ContactImage
        style={{
          backgroundImage: `url('https:${data.contactImage.fields.file.url}')`,
        }}
      />
    </ContactContainer>
  );
};

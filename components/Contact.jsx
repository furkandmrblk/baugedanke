import React, { useEffect, useState } from 'react';
import emailjs, { init } from 'emailjs-com';
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
  ErrorMessage,
  SuccessMessage,
} from './Contact.styled';

const SERVICE_ID = process.env.NEXT_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_TEMPLATE_ID;
const USER_ID = process.env.NEXT_USER_ID;
init(USER_ID);

export const Contact = (props) => {
  const data = props.props.fields;
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    let name = e.target.name.value;
    let email = e.target.email.value;
    let message = e.target.message.value;

    if (!name || !email || !message) {
      setSuccess(false);
      setError(true);
    } else {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
        (result) => {
          console.log(result.text);
          setError(false);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  }

  return (
    <ContactContainer id="kontakt">
      <ContactLeftDiv onSubmit={sendEmail}>
        <ContactTitle>{data.kontaktTitel}</ContactTitle>
        <ContactText>{data.kontaktText}</ContactText>
        <input type="hidden" name="contact_number" />
        <ContactLabel>Name</ContactLabel>
        <ContactInput type="text" name="name" />
        <ContactLabel>Email</ContactLabel>
        <ContactInput type="email" name="email" />
        <ContactLabel>Nachricht</ContactLabel>
        <ContactTextarea type="text" name="message" />
        <ContactButton type="submit" value="Send">
          Senden
        </ContactButton>
        {error && (
          <ErrorMessage>Bitte füllen Sie alle Felder aus.</ErrorMessage>
        )}
        {success && (
          <SuccessMessage>Nachricht erfolgreich abgeschickt.</SuccessMessage>
        )}
      </ContactLeftDiv>
      <ContactImage
        style={{
          backgroundImage: `url('https:${data.kontaktBild.fields.file.url}')`,
        }}
      />
    </ContactContainer>
  );
};

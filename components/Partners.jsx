import React from 'react';
import {
  PartnersContainer,
  PartnersDiv,
  PartnersField,
  PartnersFieldDiv,
  PartnersFieldInnerDiv,
  PartnersName,
  PartnersTitle,
} from './Partners.styled';

export const Partners = (props) => {
  const data = props.props;
  console.log(data);
  return (
    <PartnersContainer>
      <PartnersDiv>
        <PartnersTitle>Unsere Partner</PartnersTitle>
        <PartnersFieldDiv>
          {data.map((partner) => (
            <PartnersFieldInnerDiv key={partner.sys.id}>
              <PartnersField
                style={{
                  backgroundImage: `url('https:${partner.fields.partnerLogo.fields.file.url}')`,
                }}
              />
              <PartnersName>{partner.fields.partnerName}</PartnersName>
            </PartnersFieldInnerDiv>
          ))}
        </PartnersFieldDiv>
      </PartnersDiv>
    </PartnersContainer>
  );
};

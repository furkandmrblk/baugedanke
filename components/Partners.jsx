import React from 'react';
import {
  PartnersContainer,
  PartnersDiv,
  PartnersField,
  PartnersFieldDiv,
  PartnersTitle,
} from './Partners.styled';

export const Partners = (props) => {
  const data = props.props;
  return (
    <PartnersContainer>
      <PartnersDiv>
        <PartnersTitle>Unsere Partner</PartnersTitle>
        <PartnersFieldDiv>
          {data.map((partner) => (
            <PartnersField
              key={partner.sys.id}
              style={{
                backgroundImage: `url('https:${partner.fields.partnerLogo.fields.file.url}')`,
              }}
            />
          ))}
        </PartnersFieldDiv>
      </PartnersDiv>
    </PartnersContainer>
  );
};

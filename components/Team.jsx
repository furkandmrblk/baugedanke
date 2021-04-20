import React from 'react';
import {
  TeamBottomDiv,
  TeamCard,
  TeamCardImage,
  TeamCardJob,
  TeamCardName,
  TeamCardNumber,
  TeamContainer,
  TeamTitle,
} from './Team.styled';

export const Team = (props) => {
  const data = props.props;

  return (
    <TeamContainer id="unserteam">
      <TeamTitle>Unser Team</TeamTitle>
      <TeamBottomDiv>
        {data.map((person) => (
          <TeamCard key={person.sys.id}>
            {person.fields.teamsBild && (
              <TeamCardImage
                style={{
                  backgroundImage: `url('https:${person.fields.teamsBild.fields.file.url}')`,
                }}
              />
            )}
            <TeamCardName>{person.fields.teamsName}</TeamCardName>
            <TeamCardJob>{person.fields.teamsJob}</TeamCardJob>
            <TeamCardNumber href={'tel:' + person.fields.teamsTelefonnummer}>
              {person.fields.teamsTelefonnummer}
            </TeamCardNumber>
          </TeamCard>
        ))}
      </TeamBottomDiv>
    </TeamContainer>
  );
};

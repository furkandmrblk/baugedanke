import React from 'react';
import {
  ProjectBackground,
  ProjectBigImage,
  ProjectColumn,
  ProjectContainer,
  ProjectDescription,
  ProjectDetails,
  ProjectDetailsDiv,
  ProjectDetailsInfo,
  ProjectDetailsTitle,
  ProjectHeroColumn,
  ProjectImage,
  ProjectRow,
  ProjectText,
  ProjectTextTitle,
  ProjectTitle,
} from './Project.styled';

export const Project = (props) => {
  const data = props.props.fields;

  return (
    <ProjectContainer>
      <ProjectBackground />
      <ProjectRow>
        <ProjectImage
          style={{
            backgroundImage: `url('https:${data.projektBild.fields.file.url}')`,
          }}
        />
        <ProjectColumn>
          <ProjectTitle>{data.projektTitel}</ProjectTitle>
          <ProjectDescription>{data.projektBeschreibung}</ProjectDescription>
          <ProjectHeroColumn>
            <ProjectTextTitle>{data.projektTextTitel}</ProjectTextTitle>
            <ProjectText>
              {data.projektText
                .replace(/\\n/g, ' ')
                .split('\n')
                .map((t, i) =>
                  i > 0 ? (
                    <span key={i}>
                      <br />
                      {t}
                    </span>
                  ) : (
                    t
                  )
                )}
            </ProjectText>
          </ProjectHeroColumn>
        </ProjectColumn>
      </ProjectRow>
      <ProjectRow>
        <ProjectColumn>
          <ProjectDetailsTitle>Projektdaten:</ProjectDetailsTitle>
          <ProjectDetailsDiv>
            <ProjectDetails>Dauer</ProjectDetails>
            <ProjectDetailsInfo>1 Jahr 2 Monate</ProjectDetailsInfo>
          </ProjectDetailsDiv>
          <ProjectDetailsDiv>
            <ProjectDetails>Ort</ProjectDetails>
            <ProjectDetailsInfo>Berlin, Deutschland</ProjectDetailsInfo>
          </ProjectDetailsDiv>
          <ProjectDetailsDiv>
            <ProjectDetails>Art</ProjectDetails>
            <ProjectDetailsInfo>Trockenbau</ProjectDetailsInfo>
          </ProjectDetailsDiv>
        </ProjectColumn>
        <ProjectColumn>
          <ProjectTextTitle>{data.projektTextTitel2}</ProjectTextTitle>
          <ProjectText>
            {data.projektText2
              .replace(/\\n/g, ' ')
              .split('\n')
              .map((t, i) =>
                i > 0 ? (
                  <span key={i}>
                    <br />
                    {t}
                  </span>
                ) : (
                  t
                )
              )}
          </ProjectText>
        </ProjectColumn>
      </ProjectRow>
      <ProjectBigImage
        style={{
          backgroundImage: `url('https:${data.projektBild2.fields.file.url}')`,
        }}
      />
      <ProjectRow>
        <ProjectImage
          style={{
            backgroundImage: `url('https:${data.projektBild3.fields.file.url}')`,
          }}
        />
        <ProjectColumn>
          <ProjectTextTitle>{data.projektTextTitel3}</ProjectTextTitle>
          <ProjectText>
            {data.projektText3
              .replace(/\\n/g, ' ')
              .split('\n')
              .map((t, i) =>
                i > 0 ? (
                  <span key={i}>
                    <br />
                    {t}
                  </span>
                ) : (
                  t
                )
              )}
          </ProjectText>
        </ProjectColumn>
      </ProjectRow>
      <ProjectRow>
        <ProjectColumn>
          <ProjectTextTitle>{data.projektTextTitel4}</ProjectTextTitle>
          <ProjectText>
            {data.projektText4
              .replace(/\\n/g, ' ')
              .split('\n')
              .map((t, i) =>
                i > 0 ? (
                  <span key={i}>
                    <br />
                    {t}
                  </span>
                ) : (
                  t
                )
              )}
          </ProjectText>
        </ProjectColumn>
        <ProjectImage
          style={{
            backgroundImage: `url('https:${data.projektBild4.fields.file.url}')`,
          }}
        />
      </ProjectRow>
    </ProjectContainer>
  );
};

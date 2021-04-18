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
            backgroundImage: `url('https:${data.projectImage.fields.file.url}')`,
          }}
        />
        <ProjectColumn>
          <ProjectTitle>{data.projectTitle}</ProjectTitle>
          <ProjectDescription>{data.projectDescription}</ProjectDescription>
          <ProjectHeroColumn>
            <ProjectTextTitle>{data.projectTextTitle}</ProjectTextTitle>
            <ProjectText>
              {data.projectText
                .replace(/\\n/g, ' ')
                .split('\n')
                .map((t, i) =>
                  i > 0 ? (
                    <>
                      <br />
                      {t}
                    </>
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
          <ProjectTextTitle>{data.projectTextTitle2}</ProjectTextTitle>
          <ProjectText>
            {data.projectText2
              .replace(/\\n/g, ' ')
              .split('\n')
              .map((t, i) =>
                i > 0 ? (
                  <>
                    <br />
                    {t}
                  </>
                ) : (
                  t
                )
              )}
          </ProjectText>
        </ProjectColumn>
      </ProjectRow>
      <ProjectBigImage
        style={{
          backgroundImage: `url('https:${data.projectImage2.fields.file.url}')`,
        }}
      />
      <ProjectRow>
        <ProjectImage
          style={{
            backgroundImage: `url('https:${data.projectImage3.fields.file.url}')`,
          }}
        />
        <ProjectColumn>
          <ProjectTextTitle>{data.projectTextTitle3}</ProjectTextTitle>
          <ProjectText>
            {data.projectText3
              .replace(/\\n/g, ' ')
              .split('\n')
              .map((t, i) =>
                i > 0 ? (
                  <>
                    <br />
                    {t}
                  </>
                ) : (
                  t
                )
              )}
          </ProjectText>
        </ProjectColumn>
      </ProjectRow>
      <ProjectRow>
        <ProjectColumn>
          <ProjectTextTitle>{data.projectTextTitle4}</ProjectTextTitle>
          <ProjectText>
            {data.projectText4
              .replace(/\\n/g, ' ')
              .split('\n')
              .map((t, i) =>
                i > 0 ? (
                  <>
                    <br />
                    {t}
                  </>
                ) : (
                  t
                )
              )}
          </ProjectText>
        </ProjectColumn>
        <ProjectImage
          style={{
            backgroundImage: `url('https:${data.projectImage4.fields.file.url}')`,
          }}
        />
      </ProjectRow>
    </ProjectContainer>
  );
};

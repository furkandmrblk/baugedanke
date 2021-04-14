import React, { useEffect } from 'react';
import Link from 'next/link';
import {
  ProjectsContainer,
  ProjectsInnerSlider,
  ProjectsItem,
  ProjectsSlider,
  ProjectsTitle,
  ProjectsDiv,
  ProjectCTA,
  ProjectCTAText,
} from './Projects.styled';

export const Projects = (props) => {
  const data = props.props;

  useEffect(() => {
    const slider = document.getElementById('slider');
    const innerSlider = document.getElementById('innerSlider');

    let pressed = false;
    let startX;
    let x;

    slider.addEventListener('mousedown', (e) => {
      pressed = true;
      startX = e.offsetX - innerSlider.offsetLeft;
      slider.style.cursor = 'grabbing';
    });

    slider.addEventListener('mouseenter', () => {
      slider.style.cursor = 'grab';
    });

    slider.addEventListener('mouseup', () => {
      slider.style.cursor = 'grab';
    });

    window.addEventListener('mouseup', () => {
      pressed = false;
    });

    slider.addEventListener('mousemove', (e) => {
      if (!pressed) return;
      e.preventDefault();

      x = e.offsetX;

      innerSlider.style.left = `${x - startX}px`;

      checkBoundary();
    });

    function checkBoundary() {
      let outer = slider.getBoundingClientRect();
      let inner = innerSlider.getBoundingClientRect();

      if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = '0px';
      } else if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`;
      }
    }
  });

  return (
    <ProjectsContainer id="unsereprojekte">
      <ProjectsTitle>Unsere Projekte</ProjectsTitle>
      <ProjectsDiv>
        <ProjectsSlider id="slider">
          <ProjectsInnerSlider id="innerSlider">
            {data.map((project) => (
              <ProjectsItem
                key={project.sys.id}
                style={{
                  backgroundImage: `url('https:${project.fields.projectImage.fields.file.url}')`,
                }}
              >
                <Link href={'/projekte/' + project.fields.slug}>
                  <ProjectCTA>
                    <ProjectCTAText>Zum Projekt</ProjectCTAText>
                  </ProjectCTA>
                </Link>
              </ProjectsItem>
            ))}
          </ProjectsInnerSlider>
        </ProjectsSlider>
      </ProjectsDiv>
    </ProjectsContainer>
  );
};

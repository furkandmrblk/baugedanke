import React, { useEffect } from 'react';
import Link from 'next/link';
import {
  ProjectsContainer,
  ProjectsInnerSlider,
  ProjectsItem,
  ProjectsSlider,
  ProjectsMobileSlider,
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

    // Mobile Slider
    const sliderMobile = document.getElementById('sliderMobile');
    const innerSliderMobile = document.getElementById('innerSliderMobile');
    const box = document.getElementById('box');

    let width = box.offsetWidth + 30;
    innerSliderMobile.style.minWidth = `${box.length * width}px`;
    let start;
    let change;

    sliderMobile.addEventListener('touchstart', (e) => {
      start = e.touches[0].clientX;
    });

    sliderMobile.addEventListener('touchmove', (e) => {
      e.preventDefault();
      let touch = e.touches[0];
      change = start - touch.clientX;
    });

    sliderMobile.addEventListener('touchend', slideShow);

    function slideShow() {
      if (change > 0) {
        sliderMobile.scrollLeft += width;
      } else {
        sliderMobile.scrollLeft -= width;
      }
    }

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
        <ProjectsMobileSlider id="sliderMobile">
          <ProjectsInnerSlider id="innerSliderMobile">
            {data.map((project) => (
              <ProjectsItem
                id="box"
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
        </ProjectsMobileSlider>
      </ProjectsDiv>
    </ProjectsContainer>
  );
};

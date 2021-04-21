import React, { useEffect, useRef } from 'react';
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
    let pressedMobile = false;
    let startXMobile;
    let xMobile;

    sliderMobile.addEventListener('touchstart', (e) => {
      pressedMobile = true;
      e.offsetX = e.touches[0].pageX - e.touches[0].target.offsetLeft;
      startXMobile = e.offsetX - innerSliderMobile.offsetLeft;
    });

    window.addEventListener('touchend', () => {
      pressedMobile = false;
    });

    sliderMobile.addEventListener('touchmove', (e) => {
      if (!pressedMobile) return;
      e.preventDefault();
      e.offsetX = e.touches[0].pageX - e.touches[0].target.offsetLeft;
      xMobile = e.offsetX;

      innerSliderMobile.style.left = `${xMobile - startXMobile}px`;

      checkBoundaryMobile();
    });

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

    function checkBoundaryMobile() {
      let outer = sliderMobile.getBoundingClientRect();
      let inner = innerSliderMobile.getBoundingClientRect();

      if (parseInt(innerSliderMobile.style.left) > 0) {
        innerSliderMobile.style.left = '0px';
      } else if (inner.right < outer.right) {
        innerSliderMobile.style.left = `-${inner.width - outer.width}px`;
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
                  backgroundImage: `url('https:${project.fields.projektBild.fields.file.url}')`,
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
                  backgroundImage: `url('https:${project.fields.projektBild.fields.file.url}')`,
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

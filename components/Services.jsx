import React from 'react';
import {
  ServicesBottomDiv,
  ServicesColumn,
  ServicesColumn2,
  ServicesContainer,
  ServicesImage,
  ServicesInnerDiv,
  ServicesItem,
  ServicesItemDiv,
  ServicesSvg,
  ServicesText,
  ServicesTextDiv,
  ServicesTitle,
  ServicesWrapper,
} from './Services.styled';

export const Services = (props) => {
  const data = props.props.fields;
  return (
    <ServicesContainer id="unsereleistungen">
      <ServicesImage
        style={{
          backgroundImage: `url('https:${data.leistungenBild.fields.file.url}')`,
        }}
      />
      <ServicesBottomDiv>
        <ServicesTextDiv>
          <ServicesTitle>{data.leistungenTitel}</ServicesTitle>
          <ServicesText>{data.leistungenText}</ServicesText>
        </ServicesTextDiv>
        <ServicesWrapper>
          <ServicesItemDiv>
            <ServicesColumn>
              <ServicesInnerDiv>
                <ServicesSvg />
                <ServicesItem>Abriss</ServicesItem>
              </ServicesInnerDiv>
              <ServicesInnerDiv>
                <ServicesSvg />
                <ServicesItem>Trockenbau</ServicesItem>
              </ServicesInnerDiv>
              <ServicesInnerDiv>
                <ServicesSvg />
                <ServicesItem>Spachtel</ServicesItem>
              </ServicesInnerDiv>
              <ServicesInnerDiv>
                <ServicesSvg />
                <ServicesItem>Maler</ServicesItem>
              </ServicesInnerDiv>
              <ServicesInnerDiv>
                <ServicesSvg />
                <ServicesItem>Lack</ServicesItem>
              </ServicesInnerDiv>
              <ServicesInnerDiv>
                <ServicesSvg />
                <ServicesItem>Fließen</ServicesItem>
              </ServicesInnerDiv>
            </ServicesColumn>
          </ServicesItemDiv>
          <ServicesItemDiv>
            <ServicesColumn2>
              <ServicesInnerDiv>
                <ServicesSvg />
                <ServicesItem>Estrich</ServicesItem>
              </ServicesInnerDiv>
              <ServicesInnerDiv>
                <ServicesSvg />
                <ServicesItem>Tischler</ServicesItem>
              </ServicesInnerDiv>
              <ServicesInnerDiv>
                <ServicesSvg />
                <ServicesItem>Montage</ServicesItem>
              </ServicesInnerDiv>
              <ServicesInnerDiv>
                <ServicesSvg />
                <ServicesItem>Heizung</ServicesItem>
              </ServicesInnerDiv>
              <ServicesInnerDiv>
                <ServicesSvg />
                <ServicesItem>Lüftung</ServicesItem>
              </ServicesInnerDiv>
              <ServicesInnerDiv>
                <ServicesSvg />
                <ServicesItem>Sanitär</ServicesItem>
              </ServicesInnerDiv>
            </ServicesColumn2>
          </ServicesItemDiv>
        </ServicesWrapper>
      </ServicesBottomDiv>
    </ServicesContainer>
  );
};

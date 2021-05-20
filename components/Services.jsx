import React, { useEffect, useState } from 'react';
import {
  DropdownSvg,
  ServicesBottomDiv,
  ServicesColumn,
  ServicesColumn2,
  ServicesContainer,
  ServicesImage,
  ServicesInnerDiv,
  ServicesInnerInnerDiv,
  ServicesItem,
  ServicesItemDiv,
  ServicesSvg,
  ServicesText,
  ServicesTextDiv,
  ServicesTitle,
  ServicesWrapper,
  ServiceDescription1,
  ServiceDescription2,
  ServiceDescription3,
  ServiceDescription4,
  ServiceDescription5,
  ServiceDescription6,
  ServiceDescription7,
  ServiceDescription8,
  ServiceDescription9,
  ServiceDescription10,
  ServiceDescription11,
  ServiceDescription12,
} from './Services.styled';

export const Services = (props) => {
  const data = props.props.fields;

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);
  const [open12, setOpen12] = useState(false);

  const openDescription = () => {
    setOpen1(!open1);

    if (open2 === true) {
      setOpen2(!open2);
    }
    if (open3 === true) {
      setOpen3(!open3);
    }
    if (open4 === true) {
      setOpen4(!open4);
    }
    if (open5 === true) {
      setOpen5(!open5);
    }
    if (open6 === true) {
      setOpen6(!open6);
    }
    if (open7 === true) {
      setOpen7(!open7);
    }
    if (open8 === true) {
      setOpen8(!open8);
    }
    if (open9 === true) {
      setOpen9(!open9);
    }
    if (open10 === true) {
      setOpen10(!open10);
    }
    if (open11 === true) {
      setOpen11(!open11);
    }
    if (open12 === true) {
      setOpen12(!open12);
    }
  };
  const openDescription2 = () => {
    setOpen2(!open2);

    if (open1 === true) {
      setOpen1(!open1);
    }
    if (open3 === true) {
      setOpen3(!open3);
    }
    if (open4 === true) {
      setOpen4(!open4);
    }
    if (open5 === true) {
      setOpen5(!open5);
    }
    if (open6 === true) {
      setOpen6(!open6);
    }
    if (open7 === true) {
      setOpen7(!open7);
    }
    if (open8 === true) {
      setOpen8(!open8);
    }
    if (open9 === true) {
      setOpen9(!open9);
    }
    if (open10 === true) {
      setOpen10(!open10);
    }
    if (open11 === true) {
      setOpen11(!open11);
    }
    if (open12 === true) {
      setOpen12(!open12);
    }
  };
  const openDescription3 = () => {
    setOpen3(!open3);

    if (open2 === true) {
      setOpen2(!open2);
    }
    if (open1 === true) {
      setOpen1(!open1);
    }
    if (open4 === true) {
      setOpen4(!open4);
    }
    if (open5 === true) {
      setOpen5(!open5);
    }
    if (open6 === true) {
      setOpen6(!open6);
    }
    if (open7 === true) {
      setOpen7(!open7);
    }
    if (open8 === true) {
      setOpen8(!open8);
    }
    if (open9 === true) {
      setOpen9(!open9);
    }
    if (open10 === true) {
      setOpen10(!open10);
    }
    if (open11 === true) {
      setOpen11(!open11);
    }
    if (open12 === true) {
      setOpen12(!open12);
    }
  };
  const openDescription4 = () => {
    setOpen4(!open4);

    if (open2 === true) {
      setOpen2(!open2);
    }
    if (open3 === true) {
      setOpen3(!open3);
    }
    if (open1 === true) {
      setOpen1(!open1);
    }
    if (open5 === true) {
      setOpen5(!open5);
    }
    if (open6 === true) {
      setOpen6(!open6);
    }
    if (open7 === true) {
      setOpen7(!open7);
    }
    if (open8 === true) {
      setOpen8(!open8);
    }
    if (open9 === true) {
      setOpen9(!open9);
    }
    if (open10 === true) {
      setOpen10(!open10);
    }
    if (open11 === true) {
      setOpen11(!open11);
    }
    if (open12 === true) {
      setOpen12(!open12);
    }
  };
  const openDescription5 = () => {
    setOpen5(!open5);

    if (open2 === true) {
      setOpen2(!open2);
    }
    if (open3 === true) {
      setOpen3(!open3);
    }
    if (open4 === true) {
      setOpen4(!open4);
    }
    if (open1 === true) {
      setOpen1(!open1);
    }
    if (open6 === true) {
      setOpen6(!open6);
    }
    if (open7 === true) {
      setOpen7(!open7);
    }
    if (open8 === true) {
      setOpen8(!open8);
    }
    if (open9 === true) {
      setOpen9(!open9);
    }
    if (open10 === true) {
      setOpen10(!open10);
    }
    if (open11 === true) {
      setOpen11(!open11);
    }
    if (open12 === true) {
      setOpen12(!open12);
    }
  };
  const openDescription6 = () => {
    setOpen6(!open6);

    if (open2 === true) {
      setOpen2(!open2);
    }
    if (open3 === true) {
      setOpen3(!open3);
    }
    if (open4 === true) {
      setOpen4(!open4);
    }
    if (open5 === true) {
      setOpen5(!open5);
    }
    if (open1 === true) {
      setOpen1(!open1);
    }
    if (open7 === true) {
      setOpen7(!open7);
    }
    if (open8 === true) {
      setOpen8(!open8);
    }
    if (open9 === true) {
      setOpen9(!open9);
    }
    if (open10 === true) {
      setOpen10(!open10);
    }
    if (open11 === true) {
      setOpen11(!open11);
    }
    if (open12 === true) {
      setOpen12(!open12);
    }
  };
  const openDescription7 = () => {
    setOpen7(!open7);

    if (open2 === true) {
      setOpen2(!open2);
    }
    if (open3 === true) {
      setOpen3(!open3);
    }
    if (open4 === true) {
      setOpen4(!open4);
    }
    if (open5 === true) {
      setOpen5(!open5);
    }
    if (open6 === true) {
      setOpen6(!open6);
    }
    if (open1 === true) {
      setOpen1(!open1);
    }
    if (open8 === true) {
      setOpen8(!open8);
    }
    if (open9 === true) {
      setOpen9(!open9);
    }
    if (open10 === true) {
      setOpen10(!open10);
    }
    if (open11 === true) {
      setOpen11(!open11);
    }
    if (open12 === true) {
      setOpen12(!open12);
    }
  };
  const openDescription8 = () => {
    setOpen8(!open8);

    if (open2 === true) {
      setOpen2(!open2);
    }
    if (open3 === true) {
      setOpen3(!open3);
    }
    if (open4 === true) {
      setOpen4(!open4);
    }
    if (open5 === true) {
      setOpen5(!open5);
    }
    if (open6 === true) {
      setOpen6(!open6);
    }
    if (open7 === true) {
      setOpen7(!open7);
    }
    if (open1 === true) {
      setOpen1(!open1);
    }
    if (open9 === true) {
      setOpen9(!open9);
    }
    if (open10 === true) {
      setOpen10(!open10);
    }
    if (open11 === true) {
      setOpen11(!open11);
    }
    if (open12 === true) {
      setOpen12(!open12);
    }
  };
  const openDescription9 = () => {
    setOpen9(!open9);

    if (open2 === true) {
      setOpen2(!open2);
    }
    if (open3 === true) {
      setOpen3(!open3);
    }
    if (open4 === true) {
      setOpen4(!open4);
    }
    if (open5 === true) {
      setOpen5(!open5);
    }
    if (open6 === true) {
      setOpen6(!open6);
    }
    if (open7 === true) {
      setOpen7(!open7);
    }
    if (open8 === true) {
      setOpen8(!open8);
    }
    if (open1 === true) {
      setOpen1(!open1);
    }
    if (open10 === true) {
      setOpen10(!open10);
    }
    if (open11 === true) {
      setOpen11(!open11);
    }
    if (open12 === true) {
      setOpen12(!open12);
    }
  };
  const openDescription10 = () => {
    setOpen10(!open10);

    if (open2 === true) {
      setOpen2(!open2);
    }
    if (open3 === true) {
      setOpen3(!open3);
    }
    if (open4 === true) {
      setOpen4(!open4);
    }
    if (open5 === true) {
      setOpen5(!open5);
    }
    if (open6 === true) {
      setOpen6(!open6);
    }
    if (open7 === true) {
      setOpen7(!open7);
    }
    if (open8 === true) {
      setOpen8(!open8);
    }
    if (open9 === true) {
      setOpen9(!open9);
    }
    if (open1 === true) {
      setOpen1(!open1);
    }
    if (open11 === true) {
      setOpen11(!open11);
    }
    if (open12 === true) {
      setOpen12(!open12);
    }
  };
  const openDescription11 = () => {
    setOpen11(!open11);

    if (open2 === true) {
      setOpen2(!open2);
    }
    if (open3 === true) {
      setOpen3(!open3);
    }
    if (open4 === true) {
      setOpen4(!open4);
    }
    if (open5 === true) {
      setOpen5(!open5);
    }
    if (open6 === true) {
      setOpen6(!open6);
    }
    if (open7 === true) {
      setOpen7(!open7);
    }
    if (open8 === true) {
      setOpen8(!open8);
    }
    if (open9 === true) {
      setOpen9(!open9);
    }
    if (open10 === true) {
      setOpen10(!open10);
    }
    if (open1 === true) {
      setOpen1(!open1);
    }
    if (open12 === true) {
      setOpen12(!open12);
    }
  };
  const openDescription12 = () => {
    setOpen12(!open12);

    if (open2 === true) {
      setOpen2(!open2);
    }
    if (open3 === true) {
      setOpen3(!open3);
    }
    if (open4 === true) {
      setOpen4(!open4);
    }
    if (open5 === true) {
      setOpen5(!open5);
    }
    if (open6 === true) {
      setOpen6(!open6);
    }
    if (open7 === true) {
      setOpen7(!open7);
    }
    if (open8 === true) {
      setOpen8(!open8);
    }
    if (open9 === true) {
      setOpen9(!open9);
    }
    if (open10 === true) {
      setOpen10(!open10);
    }
    if (open11 === true) {
      setOpen11(!open11);
    }
    if (open1 === true) {
      setOpen1(!open1);
    }
  };

  useEffect(() => {
    if (open1 === true) {
      document.getElementById('Arrow').style.transform = 'rotate(180deg)';
    } else if (open1 === false) {
      document.getElementById('Arrow').style.transform = 'rotate(0deg)';
    }
    if (open2 === true) {
      document.getElementById('Arrow2').style.transform = 'rotate(180deg)';
    } else if (open2 === false) {
      document.getElementById('Arrow2').style.transform = 'rotate(0deg)';
    }
    if (open3 === true) {
      document.getElementById('Arrow3').style.transform = 'rotate(180deg)';
    } else if (open3 === false) {
      document.getElementById('Arrow3').style.transform = 'rotate(0deg)';
    }
    if (open4 === true) {
      document.getElementById('Arrow4').style.transform = 'rotate(180deg)';
    } else if (open4 === false) {
      document.getElementById('Arrow4').style.transform = 'rotate(0deg)';
    }
    if (open5 === true) {
      document.getElementById('Arrow5').style.transform = 'rotate(180deg)';
    } else if (open5 === false) {
      document.getElementById('Arrow5').style.transform = 'rotate(0deg)';
    }
    if (open6 === true) {
      document.getElementById('Arrow6').style.transform = 'rotate(180deg)';
    } else if (open6 === false) {
      document.getElementById('Arrow6').style.transform = 'rotate(0deg)';
    }
    if (open7 === true) {
      document.getElementById('Arrow7').style.transform = 'rotate(180deg)';
    } else if (open7 === false) {
      document.getElementById('Arrow7').style.transform = 'rotate(0deg)';
    }
    if (open8 === true) {
      document.getElementById('Arrow8').style.transform = 'rotate(180deg)';
    } else if (open8 === false) {
      document.getElementById('Arrow8').style.transform = 'rotate(0deg)';
    }
    if (open9 === true) {
      document.getElementById('Arrow9').style.transform = 'rotate(180deg)';
    } else if (open9 === false) {
      document.getElementById('Arrow9').style.transform = 'rotate(0deg)';
    }
    if (open10 === true) {
      document.getElementById('Arrow10').style.transform = 'rotate(180deg)';
    } else if (open10 === false) {
      document.getElementById('Arrow10').style.transform = 'rotate(0deg)';
    }
    if (open11 === true) {
      document.getElementById('Arrow11').style.transform = 'rotate(180deg)';
    } else if (open11 === false) {
      document.getElementById('Arrow11').style.transform = 'rotate(0deg)';
    }
    if (open12 === true) {
      document.getElementById('Arrow12').style.transform = 'rotate(180deg)';
    } else if (open12 === false) {
      document.getElementById('Arrow12').style.transform = 'rotate(0deg)';
      12;
    }
  });

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
              <ServicesInnerDiv onClick={openDescription}>
                <ServicesSvg />
                <ServicesInnerInnerDiv>
                  <ServicesItem>{data.leistung1}</ServicesItem>
                  <DropdownSvg id="Arrow" />
                </ServicesInnerInnerDiv>
              </ServicesInnerDiv>
              <ServiceDescription1 open1={open1}>
                {data.leistungText1
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
              </ServiceDescription1>
              <ServicesInnerDiv onClick={openDescription2}>
                <ServicesSvg />
                <ServicesInnerInnerDiv>
                  <ServicesItem>{data.leistung2}</ServicesItem>
                  <DropdownSvg id="Arrow2" />
                </ServicesInnerInnerDiv>
              </ServicesInnerDiv>
              <ServiceDescription2 open2={open2}>
                {data.leistungText2
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
              </ServiceDescription2>
              <ServicesInnerDiv onClick={openDescription3}>
                <ServicesSvg />
                <ServicesInnerInnerDiv>
                  <ServicesItem>{data.leistung3}</ServicesItem>
                  <DropdownSvg id="Arrow3" />
                </ServicesInnerInnerDiv>
              </ServicesInnerDiv>
              <ServiceDescription3 open3={open3}>
                {data.leistungText3
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
              </ServiceDescription3>
              <ServicesInnerDiv onClick={openDescription4}>
                <ServicesSvg />
                <ServicesInnerInnerDiv>
                  <ServicesItem>{data.leistung4}</ServicesItem>
                  <DropdownSvg id="Arrow4" />
                </ServicesInnerInnerDiv>
              </ServicesInnerDiv>
              <ServiceDescription4 open4={open4}>
                {data.leistungText4
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
              </ServiceDescription4>
              <ServicesInnerDiv onClick={openDescription5}>
                <ServicesSvg />
                <ServicesInnerInnerDiv>
                  <ServicesItem>{data.leistung5}</ServicesItem>
                  <DropdownSvg id="Arrow5" />
                </ServicesInnerInnerDiv>
              </ServicesInnerDiv>
              <ServiceDescription5 open5={open5}>
                {data.leistungText5
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
              </ServiceDescription5>
              <ServicesInnerDiv onClick={openDescription6}>
                <ServicesSvg />
                <ServicesInnerInnerDiv>
                  <ServicesItem>{data.leistung6}</ServicesItem>
                  <DropdownSvg id="Arrow6" />
                </ServicesInnerInnerDiv>
              </ServicesInnerDiv>
              <ServiceDescription6 open6={open6}>
                {data.leistungText6
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
              </ServiceDescription6>
            </ServicesColumn>
          </ServicesItemDiv>
          <ServicesItemDiv>
            <ServicesColumn2>
              <ServicesInnerDiv onClick={openDescription7}>
                <ServicesSvg />
                <ServicesInnerInnerDiv>
                  <ServicesItem>{data.leistung7}</ServicesItem>
                  <DropdownSvg id="Arrow7" />
                </ServicesInnerInnerDiv>
              </ServicesInnerDiv>
              <ServiceDescription7 open7={open7}>
                {data.leistungText7
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
              </ServiceDescription7>
              <ServicesInnerDiv onClick={openDescription8}>
                <ServicesSvg />
                <ServicesInnerInnerDiv>
                  <ServicesItem>{data.leistung8}</ServicesItem>
                  <DropdownSvg id="Arrow8" />
                </ServicesInnerInnerDiv>
              </ServicesInnerDiv>
              <ServiceDescription8 open8={open8}>
                {data.leistungText8
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
              </ServiceDescription8>
              <ServicesInnerDiv onClick={openDescription9}>
                <ServicesSvg />
                <ServicesInnerInnerDiv>
                  <ServicesItem>{data.leistung9}</ServicesItem>
                  <DropdownSvg id="Arrow9" />
                </ServicesInnerInnerDiv>
              </ServicesInnerDiv>
              <ServiceDescription9 open9={open9}>
                {data.leistungText9
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
              </ServiceDescription9>
              <ServicesInnerDiv onClick={openDescription10}>
                <ServicesSvg />
                <ServicesInnerInnerDiv>
                  <ServicesItem>{data.leistung10}</ServicesItem>
                  <DropdownSvg id="Arrow10" />
                </ServicesInnerInnerDiv>
              </ServicesInnerDiv>
              <ServiceDescription10 open10={open10}>
                {data.leistungText10
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
              </ServiceDescription10>
              <ServicesInnerDiv onClick={openDescription11}>
                <ServicesSvg />
                <ServicesInnerInnerDiv>
                  <ServicesItem>{data.leistung11}</ServicesItem>
                  <DropdownSvg id="Arrow11" />
                </ServicesInnerInnerDiv>
              </ServicesInnerDiv>
              <ServiceDescription11 open11={open11}>
                {data.leistungText11
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
              </ServiceDescription11>
              <ServicesInnerDiv onClick={openDescription12}>
                <ServicesSvg />
                <ServicesInnerInnerDiv>
                  <ServicesItem>{data.leistung12}</ServicesItem>
                  <DropdownSvg id="Arrow12" />
                </ServicesInnerInnerDiv>
              </ServicesInnerDiv>
              <ServiceDescription12 open12={open12}>
                {data.leistungText12
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
              </ServiceDescription12>
            </ServicesColumn2>
          </ServicesItemDiv>
        </ServicesWrapper>
      </ServicesBottomDiv>
    </ServicesContainer>
  );
};

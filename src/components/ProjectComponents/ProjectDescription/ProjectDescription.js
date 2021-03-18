import React from "react"
import styled from "styled-components"
import { Container } from "../../layoutComponents"
import { device } from "../../../styles/constants"

const ProjectDescription = ({
  description,
  price,
  location,
  area,
  bedrooms,
  bathrooms,
  facilities,
  ...otherProps
}) => {
  return (
    <Section>
      <Container>
        <WrapperDescription>
          <ProjectText>
            <TextProject dangerouslySetInnerHTML={{ __html:  description }} />
          </ProjectText>
          <ProjectDetails>
            <MainInfo>
              {location && (
                <DescriptionItem>
                  <DescriptionInfo>
                    Местоположение
                  </DescriptionInfo>
          
                  <Location>
                    {location}
                  </Location>
                  
                </DescriptionItem>
              )}
              {area && (
                <DescriptionItem>
                  <DescriptionInfo>
                    Площадь
                  </DescriptionInfo>
                  
                    <Information>
                      {area}
                    </Information>
                  
                </DescriptionItem>
              )}
              {bedrooms && (
                <DescriptionItem>
                  <DescriptionInfo>
                    Количество спален
                  </DescriptionInfo>
                  
                    <Information>
                      {bedrooms}
                    </Information>
                  
                </DescriptionItem>
              )}
              {bathrooms && (
                <DescriptionItem>
                  <DescriptionInfo>
                    Ванные комнаты
                  </DescriptionInfo>
                  
                    <Information>
                      {bathrooms}
                    </Information>
                  
                </DescriptionItem>
              )}
              {price && (
                <Price>
                  от {price} евро
                </Price>
              )}
              {
                facilities && (
                  <DescriptionItem>
                    {
                      facilities.map((item,index) => {
                        return (
                          <Facility ley={index}>
                            {item}
                          </Facility>
                        )
                      })
                    }

                  </DescriptionItem>
                )
              }
            </MainInfo>
           
          </ProjectDetails>
        </WrapperDescription>
      </Container>
    </Section>
     
  )
}

export default ProjectDescription

const Section = styled.div`
  position:relative;
  ::before {
    content: "";
    position: absolute;
    height: 370px;
    width: 100%;
    top: -220px;
    left: 0;
    background-color: #f3f4f9;
    z-index: -1;
    transform: skewY(-35deg);
  }
  ::after {
    content: "";
    position: absolute;
    width: 150%;
    height: 270px;
    background-color: #fff;
    opacity: .4;
    left: -100px;
    top: 164px;
    transform: rotate(24deg);
    z-index: -1;
  }
`

const WrapperDescription = styled.div`
  display:flex;
  justify-content:space-between;
  width:100%;
  @media ${device.tablet} {
    flex-direction:column-reverse;
  }
  ::after {
    content: "";
    position: absolute; 
    width: 600px;
    opacity:.3;
    height: 100%;
    top: -200px;
    left: -300px;
    z-index: -1;
    background-image: url(/orange-circles-main.svg);
    background-repeat: no-repeat;
    background-size: contain;
    transform:rotate(180deg);
  }
`

const ProjectText = styled.div`
  width:50%;
  margin:48px 0 32px;
  @media ${device.tablet} {
    width:100%;
  }
`

const TextProject = styled.div`
  font-family:Lato;
  font-size:18px;
  line-height:2;
  color:black;
  opacity:.7;
`

const ProjectDetails = styled.div`
  width:40%;
  margin:48px 0 32px;
  @media ${device.tablet} {
    width:100%;
  }
`

const MainInfo = styled.div`
  display:flex;
  flex-direction:column;
`

const DescriptionItem = styled.div`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  margin-bottom:24px;
`

const DescriptionInfo = styled.span`
  max-width: 300px;
  font-family:Lato;
  color: #4B535F;
  width: 70%;
  font-size: 28px;
  line-height: 32px;
  @media ${device.laptop} {
    font-size: 24px;
    line-height: 28px;
  }
`

const Information = styled.h5`
  margin-bottom:0;
  font-size: 20px;
  line-height: 28px;
  font-family:Lato;
  color: #4B535F;
  position:relative;
  font-weight:bold;
  @media ${device.laptop} {
    font-size: 20px;
    line-height: 28px;
  }
`

const Location = styled.h5`
  margin-bottom:0;
  font-size: 24px;
  line-height: 32px;
  font-family:Lato;
  color: #4B535F;
  position:relative;
  font-weight:600;
  ::after {
    content: "";
    left:0;
    position:absolute;
    display:inline-block;
    bottom:2px;
    width:100%;
    height:2px;
    background-color:#5570BA;
    z-index:100;
    opacity:.5;
  }
  @media ${device.laptop} {
    font-size: 20px;
    line-height: 28px;
  }
`
const Facility = styled.span`
  position:relative;
  padding-left:24px;
  width:50%;
  margin-bottom:40px;
  text-transform:uppercase;
  color:#2F3B43;
  font-family:Lato;
  font-weight:600;
  font-size:14px;
  @media ${device.tablet} {
    margin-bottom:24px;
    max-width:300px;
  }
  ::before {
    top:3px;
    left:0;
    position:absolute;
    display:inline-block;
    z-index:10;
    content: "";
    width:18px;
    height:18px;
    background-color:#4B535F;
    border-radius:100%;
    opacity:.6;
    @media ${device.tablet} {
      width:9px;
      height:9px;
    }
  }
`

const Price = styled.h5`
  font-family:Museo;
  color:#5570BA;
  font-weight:500;
  font-size:48px;
  line-height:1.2;
  margin:40px 0 60px;
  @media ${device.tablet} {
    margin:24px 0 32px;
    font-size:32px;
  }
`








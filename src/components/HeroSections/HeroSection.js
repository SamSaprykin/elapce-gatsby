import React, {useState} from "react"
import styled from "styled-components"
import SectionSideBySide from "../Sections/SectionSideBySide"
import { XperiencifyImage } from "../BlockElements/BlockElements"
import SubscribeSection from "../SubscribeSection/SubscribeSection"
import { Container } from "../layoutComponents"
import { device } from "../../styles/constants"

const HeroSection = ({
  width,
  headline,
  summary,
  productName,
  callTa,
  heroImage,
  reversed,
  small,
  ...otherProps
}) => {
  const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
  }
  
  return (
    <HeroWrapper>
      <Container>
        <SectionSideBySide
          contentSide={
            <SubscribeSection 
              title={otherProps.title}
              text={otherProps.text}
              ctaText={otherProps.ctaText}
              ctaInfo={otherProps.ctaInfo}
              type="big"
            />
          }
          imageSide={
            <HeroImageSide>
              <ScreenshotVideo>
                <XperiencifyImage
                  src={heroImage?.localFile?.childImageSharp || heroImage?.source_url || heroImage}
                  alt="hero image"
                />
              </ScreenshotVideo>
              
            </HeroImageSide>
          }
          reversed={reversed}
          small={small}
        />
      </Container>
    </HeroWrapper>
   
  )
}

export default HeroSection

const HeroWrapper = styled.div`
  margin-bottom:240px;
  position: relative;
  ::after {
    content: "";
    position: absolute; 
    width: 800px;
    height: 100%;
    top: -100px;
    right: 0;
    z-index: -1;
    background-image: url(/orange-circles-main.svg);
    background-repeat: no-repeat;
    background-size: cover;
  }
`

const HeroImageSide = styled.div`
  position: relative;
  img {
    width: 100%;
  }
  @media (max-width: 991px) {
    margin-bottom: 16px;
  }
  @media ${device.tablet} {
    display:flex;
    justify-content:flex-end;
  }
  @media (max-width: 576px) {
    margin-bottom: 0;
  }
  
`

const ScreenshotVideo = styled.div`
  position: absolute;
  left:0;
  top:0px;
  width: 1250px;
  display: block;
  border-radius: 16px;
  margin: 0 0 0 -200px;
  overflow: hidden;
  @media (max-width:1600px) {
    width: 1050px;
  }
  @media ${device.laptop} {
    width: 800px;
  }
  @media ${device.tablet} {
    margin: 0;
    margin-top:-250px;
    left:0;
    top:0;
    width:110%;
    left:10%;
  }
  @media ${device.mobileL} {
    margin-top:-100px;
    left:0%;
    width:150%;
  }
`








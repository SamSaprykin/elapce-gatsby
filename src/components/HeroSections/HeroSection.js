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
  )
}

export default HeroSection

const HeroImageSide = styled.div`
  position: relative;
  img {
    width: 100%;
  }
  @media (max-width: 991px) {
    margin-bottom: 16px;
  }
  @media ${device.tablet} {
    padding-bottom:250px;
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
  top:-20px;
  width: 1250px;
  display: block;
  border-radius: 16px;
  margin: 0 0 0 -200px;
  overflow: hidden;
  @media (max-width:1600px) {
    width: 1080px;
  }
  @media ${device.tablet} {
    margin: 0;
    margin-top:-200px;
    left:0;
    top:0;
    width:110%;
    left:10%;
  }
`








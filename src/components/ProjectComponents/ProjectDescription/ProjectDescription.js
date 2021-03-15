import React from "react"
import styled from "styled-components"
import { ElapceImage } from "../../BlockElements/BlockElements"
import { Container } from "../../layoutComponents"
import { device } from "../../../styles/constants"

const ProjectDescription = ({
  images,
  projectName,
  ...otherProps
}) => {
  return (
      <Container>
        <h1>Project Description</h1>
      </Container>
  )
}

export default ProjectDescription

const HeroWrapper = styled.div`
  margin-bottom:240px;
  position: relative;
  @media ${device.mobileL} {
    margin-bottom: 200px;
  }
  ::after {
    content: "";
    position: absolute; 
    width: 700px;
    height: 100%;
    top: -200px;
    right: 0;
    z-index: -1;
    background-image: url(/orange-circles-main.svg);
    background-repeat: no-repeat;
    background-size: cover;
    @media ${device.tablet} {
      width: 600px;
    }
    @media ${device.mobileL} {
      background-size: contain;
      width:90%;
      height:100%;
      top:-150px;
      margin-bottom: 200px;
    }
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









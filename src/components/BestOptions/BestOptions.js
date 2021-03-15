import React from "react"
import styled from "styled-components"
import SectionSideBySide from "../Sections/SectionSideBySide"
import { useStaticQuery, graphql } from "gatsby"
import { 
    ElapceImage, 
    ElapceContent,
    ElapceTitle,
    ElapceText,
} from "../BlockElements/BlockElements"
import { Container } from "../layoutComponents"
import { device } from "../../styles/constants"

const BestOptions = ({
  width,
  title,
  text,
  reversed,
  small,
  ...otherProps
}) => {
  const sectionImage = useStaticQuery(graphql`
    query {
        file(absolutePath: {regex: "/mapPoints.png/"}) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <OptionWrapper>
      <Container>
        <SectionSideBySide
          contentSide={
            <ElapceContent
              alignContent="left"
              width="75%"
            >
              <ElapceTitle>
                {title}
              </ElapceTitle>
              <ElapceText>
                {text}
              </ElapceText>
            </ElapceContent>
          }
          imageSide={
            <HeroImageSide>
              <Screenshot>
                <ElapceImage
                    src={sectionImage?.file.childImageSharp}
                    alt="best option image"
                  />
              </Screenshot>
            </HeroImageSide>
          }
          reversed={reversed}
          small={small}
          align="center"
        />
      </Container>
  </OptionWrapper>   
  )
}

export default BestOptions


const OptionWrapper = styled.div`
  position: relative;

`
const HeroImageSide = styled.div`
  position: relative;
  z-index:10;
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

const Screenshot = styled.div`
  position: relative;
  left:0;
  top:0px;
  width: 100%;
  height:auto;
`








